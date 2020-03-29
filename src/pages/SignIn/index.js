/**
 * @author: SDamasceno.Dev@gmail.com
 * @description: SignIn page of App
 */

import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import logo from '~/assets/FastFeet_logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(id));
  }
  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          style={{}}
          icon="perm-identity"
          keyboardType="number-pad"
          returnKeyType="send"
          placeholder="Informe seu ID de cadastro"
          value={id}
          onChangeText={setId}
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit} style={{}}>
          Entrar no Sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
