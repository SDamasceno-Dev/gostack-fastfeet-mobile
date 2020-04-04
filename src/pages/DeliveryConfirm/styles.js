import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.View`
  height: 155px;
  background: #7d40e7;
`;

export const BtnCamera = styled(RectButton)`
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  top: 170px;
`;

export const BtnSubmitDelivery = styled(RectButton)`
  top: 350px;
  width: 335px;
  height: 45px;
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
