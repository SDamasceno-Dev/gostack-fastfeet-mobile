import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

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

export const PhotoPreview = styled(ImageBackground)`
  margin: 0 auto;
  width: 335px;
  height: 450px;
  top: -80px;
`;

export const TextPreview = styled.Text`
  top: -60px;
  margin: 0 auto;
  text-align: center;
  width: 335px;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;

export const BtnPreview = styled.View`
  margin: 0 auto;
  top: -50px;
  width: 335px;
  flex-direction: row;
  justify-content: space-around;
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
