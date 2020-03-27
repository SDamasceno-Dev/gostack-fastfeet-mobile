/**
 * @author: SDamasceno.Dev@gmail.com
 * @description: SignIn page of App
 */

import React from 'react';
import { Text, Image } from 'react-native';

import logo from '~/assets/FastFeet_logo.png';

import Input from '~/components/Input';

import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />
      <Input
        style={{ width: 325, height: 45, marginTop: 38 }}
        icon="perm-identity"
        placeholder="Informe seu ID de cadastro"
      />
      <Text>SignIn</Text>
    </Container>
  );
}
