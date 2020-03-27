/**
 * @author: SDamasceno.Dev@gmail.com
 * @description: SignIn page of App
 */

import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/FastFeet_logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
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
        />
        <SubmitButton onPress={() => {}} style={{}}>
          Entrar no Sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
