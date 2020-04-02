import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px 0;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DelivTitle = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const DelivGuide = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 25px;
`;

export const DelivGuideLine = styled.View`
  width: 280px;
  border-top-width: 2px;
  border-top-color: #7d40e7;
`;

export const DelivGuideItems = styled.View`
  width: 330px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DelivGuideIndicator = styled.View`
  top: -6px;
  width: 44px;
  align-items: center;
`;

export const DelivGuideMark = styled.View`
  width: 10px;
  height: 10px;
  border: solid 1px #7d40e7;
  background: ${(props) => (props.data ? '#7d40e7' : '#fff')};
  border-radius: 5px;
`;

export const DelivGuideLabel = styled.Text`
  font-size: 8px;
  color: #999999;
  text-align: center;
  margin-top: 6px;
`;

export const DelivStatus = styled.View``;

export const Label = styled.Text`
  margin-top: 10px;
  font-size: 8px;
  color: #999999;
  font-weight: bold;
`;

export const Info = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const DelivViewDetails = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const DelivViewDetailsText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
