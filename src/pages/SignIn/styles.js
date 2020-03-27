/**
 * @author: SDamasceno.Dev@gmail.com
 * @description: Styles Page for SignIn file of the App
 */

import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  height: 100%;
  background: #7d40e7;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  align-items: center;
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  width: 325px;
  height: 45px;
  margin-top: 38px;
`;

export const SubmitButton = styled(Button)`
  width: 325px;
  height: 45px;
  margin-top: 16px;
  background: #82bf18;
`;
