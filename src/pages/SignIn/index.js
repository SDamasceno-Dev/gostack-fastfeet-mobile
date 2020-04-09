/**
 * @author: SDamasceno.Dev@gmail.com
 * @description: SignIn page of App
 */

// Import of the dependencies to be used
import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

// Import redux actions
import { signInRequest } from '~/store/modules/auth/actions';

// Other imports
import logo from '~/assets/FastFeet_logo.png';

// Import the style used
import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  // Call the action to access the system
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
