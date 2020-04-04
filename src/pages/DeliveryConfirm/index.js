import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Alert, CameraRoll } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Permissions from 'react-native-permissions';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Background,
  BtnCamera,
  BtnSubmitDelivery,
  BtnDescription,
} from './styles';

export default function DeliveryConfirm() {
  const [permission, setPermission] = useState('undetermined');

  console.tron.log(permission);

  useEffect(() => {
    Permissions.check('android.permission.CAMERA').then((response) => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      setPermission(response);
    });
  }, []);

  async function takePicture(camera) {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.tron.log(data.uri);
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
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}>
        {({ camera }) => {
          console.tron.log('enterCamera', permission);
          return (
            <BtnCamera
              onPress={() => {
                if (permission !== 'granted') {
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
      <BtnSubmitDelivery>
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
