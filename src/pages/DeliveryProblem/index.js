/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Register a problem of the Delivery
 */

// Import of the dependencies to be used
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';

// Import the icon to be used
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Background,
  DeliveryProblemBkg,
  DeliveryProblemText,
  BtnControl,
  BtnDescription,
} from './styles';

export default function DeliveryProblem(data) {
  const profile = useSelector((state) => state.auth.user);
  const deliveryData = data.navigation.state.params;
  const [textInput, setTextInput] = useState();

  // Submit the problem of the Delivery
  async function handleSubmit() {
    await api
      .post(`/delivery/${deliveryData.id}/problems`, {
        description: textInput,
        courier_id: profile.id,
      })
      .then(
        () => {
          Alert.alert('Sucesso!', 'Problema cadastrado com sucesso!');
          setTextInput('');
        },
        (error) => {
          console.tron.log(error);
          Alert.alert(
            'Erro!',
            'O problema não foi registrado. Por favor, tente mais tarde!'
          );
        }
      );
  }

  return (
    <Container>
      <Background />
      <DeliveryProblemBkg>
        <DeliveryProblemText
          multiline
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          textAlignVertical="top"
          value={textInput}
          onChangeText={setTextInput}
        />
      </DeliveryProblemBkg>
      <BtnControl onPress={handleSubmit}>
        <BtnDescription>Enviar</BtnDescription>
      </BtnControl>
    </Container>
  );
}

// Configuration of Navigation for this page
DeliveryProblem.navigationOptions = (data) => ({
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  title: 'Informar problema',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        data.navigation.goBack();
      }}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
