import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  text-align: center;
`;

export const Background = styled.View`
  height: 155px;
  background: #7d40e7;
`;

export const DeliveryTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;
  top: -80px;
`;

export const DeliveryProblemList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 auto;
  top: -69px;
`;

export const DelivProbItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
  width: 330px;
  min-height: 55px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background: #fff;
`;

export const DelivProbDescription = styled.Text`
  width: 210px;
  font-size: 16px;
  color: #999999;
`;

export const DelivProbData = styled.Text``;
