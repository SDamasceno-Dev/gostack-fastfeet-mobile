import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';

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
  LinkFilter,
  LinkText,
} from './styles';

export default function Entregas({ navigation }) {
  const profile = useSelector((state) => state.auth.user);
  const [deliveries, setDeliveries] = useState([]);
  const [deliveryFilter, setDeliveryFilter] = useState([false, 'Pendentes']);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `courier/${profile.id}/deliveries?delivered=${deliveryFilter[0]}`
      );
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [profile.id, deliveryFilter]);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: `http://192.168.15.99:3028/files/${profile.avatar.path}`,
          }}
        />
        <Info>
          <Message>Bem vindo de volta,</Message>
          <Name>{profile.name}</Name>
        </Info>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="exit-to-app" size={25} color="#E74040" />
        </TouchableOpacity>
      </Header>
      <HeadList>
        <Title>Entregas</Title>
        <Filter>
          <LinkFilter onPress={() => setDeliveryFilter([false, 'Pendentes'])}>
            <LinkText btnPressed={deliveryFilter[1] === 'Pendentes' ? 1 : 0}>
              Pendentes
            </LinkText>
          </LinkFilter>
          <LinkFilter onPress={() => setDeliveryFilter([true, 'Entregues'])}>
            <LinkText btnPressed={deliveryFilter[1] === 'Entregues' ? 1 : 0}>
              Entregues
            </LinkText>
          </LinkFilter>
        </Filter>
      </HeadList>
      <List
        data={deliveries}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Delivery data={item} navigation={navigation} />
        )}
      />
    </Container>
  );
}

Entregas.navigationOptions = {
  headerTransparent: true,
  title: '',
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={25} color={tintColor} />
  ),
};
