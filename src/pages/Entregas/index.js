/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Dashboard of Deliveries
 */

// Import of the dependencies to be used
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// Import the icon to be used
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import the action to Logout
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
          <Delivery
            data={item}
            navigation={navigation}
            delivered={deliveryFilter[0]}
          />
        )}
      />
    </Container>
  );
}

Entregas.navigationOptions = (data) => ({
  headerTransparent: true,
  title: '',
});

// PropTypes necessary
Entregas.propTypes = {
  navigation: PropTypes.arrayOf([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};
