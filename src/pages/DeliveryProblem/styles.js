import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  text-align: center;
`;

export const Background = styled.View`
  height: 155px;
  background: #7d40e7;
`;

export const DeliveryProblemBkg = styled.View`
  width: 335px;
  height: 250px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 3px #000;
  margin: 0 auto;
  top: -69px;
`;

export const DeliveryProblemText = styled.TextInput`
  width: 300px;
  height: 220px;
  border-radius: 4px;
  margin: 0 auto;
`;

export const BtnControl = styled(RectButton)`
  width: 335px;
  height: 45px;
  top: -49px;
  border-radius: 4px;
  background: #7d40e7;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const BtnDescription = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
