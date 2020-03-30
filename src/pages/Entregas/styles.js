import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Info = styled.View`
  width: 250px;
`;

export const Message = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const HeadList = styled.View``;

export const Title = styled.Text``;

export const Filter = styled.View``;

export const Link = styled.Text``;
