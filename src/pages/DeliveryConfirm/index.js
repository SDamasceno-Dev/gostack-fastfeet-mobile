import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions';
import CameraRoll from '@react-native-community/cameraroll';

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

export default function DeliveryConfirm() {
  const [cameraPermission, setCameraPermission] = useState('undetermined');
  const [imageUri, setImageUri] = useState('');
  const [imageFile, setImageFile] = useState('');

  useEffect(() => {
    Permissions.check('android.permission.CAMERA').then((response) => {
      setCameraPermission(response);
    });
  }, []);

  useEffect(() => {
    console.tron.log('imgFile', imageFile);
  }, [imageFile]);

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
      const grantedWriteStorage = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (
        grantedReadStorage &&
        grantedWriteStorage === PermissionsAndroid.RESULTS.GRANTED
      ) {
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

  async function sendPhotoFile() {
    await CameraRoll.getPhotos({
      first: 1,
      assetType: 'Photos',
    }).then((r) => {
      setImageFile({ photos: r.edges });
    });

    try {
      // await api.post(`/courier/deliveries`, data, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     id: 110,
      //     end_date: '2020-04-05T10:28:00-03:00',
      //     courier_id: 17,
      //   },
      // });
    } catch (err) {
      console.tron.log('Erro ao registrar entrega', err);
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
