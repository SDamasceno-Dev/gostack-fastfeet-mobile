import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0 36px;
`;

export const Avatar = styled.Image`
  width: 138px;
  height: 138px;
  border-radius: 69px;
  background: #ccc;
  margin-top: 84px;
  margin: 84px auto 42px;
`;

export const Row = styled.View`
  margin-bottom: 18px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Info = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const BtnLogout = styled(RectButton)`
  width: 305px;
  height: 40px;
  border-radius: 4px;
  background: #e74040;
  align-items: center;
  justify-content: center;
`;

export const BtnLogoutText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
