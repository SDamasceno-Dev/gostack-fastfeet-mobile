/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Confirms the end of delivery sendin signature photo
 */

// Import of the dependencies to be used
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  TouchableOpacity,
  StyleSheet,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions';
import CameraRoll from '@react-native-community/cameraroll';

// Import the icon to be used
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Background,
  BtnCamera,
  BtnSubmitDelivery,
  BtnDescription,
  PhotoPreview,
  BtnPreview,
  TextPreview,
} from './styles';

export default function DeliveryConfirm(data) {
  const profile = useSelector((state) => state.auth.user);
  const deliveryData = data.navigation.state.params;
  const [cameraPermission, setCameraPermission] = useState('undetermined');
  const [imageUri, setImageUri] = useState('');
  const [photoTaked, setPhotoTaked] = useState(false);

  useEffect(() => {
    Permissions.check('android.permission.CAMERA').then((response) => {
      setCameraPermission(response);
    });
  }, []);

  async function takePicture(camera) {
    try {
      if (camera) {
        const options = {
          quality: 0.5,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true,
        };
        const { uri } = await camera.takePictureAsync(options);
        setImageUri(uri);
        setPhotoTaked(true);
      }
    } catch (err) {
      Alert.alert('Erro na captura', err);
    }
  }

  async function submitPicture() {
    try {
      const grantedReadStorage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      if (grantedReadStorage === PermissionsAndroid.RESULTS.GRANTED) {
        await CameraRoll.saveToCameraRoll(imageUri);
      } else {
        Alert.alert(
          'Erro ao gravar foto',
          'Não foi possível guardar esta foto, por favor tente novamente.'
        );
      }
    } catch (err) {
      Alert.alert('Error', err);
    }
    setImageUri(null);
  }

  let photoFile = null;
  async function sendPhotoFile() {
    if (photoTaked) {
      await CameraRoll.getPhotos({
        first: 1,
        assetType: 'Photos',
      }).then((r) => {
        const photoData = { photos: r.edges };
        photoFile = {
          uri: photoData.photos[0].node.image.uri,
          type: 'image/jpeg',
          name: photoData.photos[0].node.image.filename,
        };
      });

      const bodyFormData = new FormData();
      bodyFormData.append('file', photoFile);
      bodyFormData.append('id', String(deliveryData.id));
      bodyFormData.append('courier_id', String(profile.id));
      bodyFormData.append('end_date', JSON.parse(JSON.stringify(new Date())));
      try {
        await api.post(`/courier/deliveries`, bodyFormData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        photoFile = null;
        setPhotoTaked(false);
        Alert.alert('Sucesso!', 'Entrega concluída com sucesso!!!');
      } catch (err) {
        console.tron.log('Erro ao registrar entrega', err);
      }
    } else {
      Alert.alert(
        'Ação não permitida',
        'Você precisa fotografar primeiro a assinatura para concluir a entrega.'
      );
    }
  }
  const styles = StyleSheet.create({
    preview: {
      alignSelf: 'center',
      width: 335,
      top: 140,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <Container>
      <Background />
      {imageUri ? (
        <>
          <PhotoPreview source={{ uri: imageUri }} />
          <TextPreview>
            A foto da assinatura está com boa qualidade e legível?
          </TextPreview>
          <BtnPreview>
            <Icon
              name="cancel"
              size={25}
              color="#7d40e7"
              onPress={() => setImageUri(null)}
            />
            <Icon
              name="done"
              size={25}
              color="#7d40e7"
              onPress={() => submitPicture()}
            />
          </BtnPreview>
        </>
      ) : (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisa autorizar o uso da câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}>
          {({ camera }) => {
            return (
              <BtnCamera
                onPress={() => {
                  if (cameraPermission !== 'granted') {
                    Alert.alert(
                      'Permissão necessária',
                      'É preciso garantir o acesso à câmera para utilizar esse recurso!'
                    );
                  } else {
                    takePicture(camera);
                  }
                }}>
                <Icon name="photo-camera" size={35} color="#fff" />
              </BtnCamera>
            );
          }}
        </RNCamera>
      )}
      <BtnSubmitDelivery onPress={() => sendPhotoFile()}>
        <BtnDescription>Enviar</BtnDescription>
      </BtnSubmitDelivery>
    </Container>
  );
}

// Configuration of Navigation for this page
DeliveryConfirm.navigationOptions = (data) => ({
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  title: 'Confirmar entrega',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        data.navigation.goBack();
      }}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
