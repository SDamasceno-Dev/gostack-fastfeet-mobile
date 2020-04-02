import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  text-align: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
`;

export const Field = styled.View`
  flex-direction: column;
  margin: 9px 0;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999999;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const Background = styled.View`
  height: 155px;
  background: #7d40e7;
`;

export const DeliveryInfo = styled.View`
  width: 335px;
  height: 207px;
  padding: 15px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 3px #000;
  margin: 0 auto;
  top: -69px;
`;

export const DeliverySituation = styled.View`
  width: 335px;
  height: 159px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 3px #000;
  margin: 0 auto;
  top: -59px;
  padding: 15px;
`;

export const Controls = styled.View`
  flex-direction: row;
  margin: 0 auto;
`;

export const BtnControl = styled(RectButton)`
  width: 110px;
  height: 110px;
  align-items: center;
  background: #f8f9fd;
  box-shadow: 0px 0px 6px #000;
  top: -49px;
  padding-top: 14px;
`;

export const BtnDescription = styled.Text`
  width: 60px;
  font-size: 12px;
  color: #999999;
  text-align: center;
`;
