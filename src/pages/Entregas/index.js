import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Delivery from '~/components/Delivery';

import {
  Container,
  Header,
  Avatar,
  List,
  Info,
  Message,
  Name,
  HeadList,
  Title,
  Filter,
} from './styles';

const data = [1, 2, 3];

export default function Entregas() {
  return (
    <Container>
      <Header>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/68/sdamasceno.png' }}
        />
        <Info>
          <Message>Bem vindo de volta,</Message>
          <Name>José Maria</Name>
        </Info>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="exit-to-app" size={25} color="#E74040" />
        </TouchableOpacity>
      </Header>
      <HeadList>
        <Title>Entregas</Title>
        <Filter />
      </HeadList>
      <List
        data={data}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Delivery data={item} />}
      />
    </Container>
  );
}

Entregas.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={25} color={tintColor} />
  ),
};
