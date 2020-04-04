import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Avatar,
  Row,
  Label,
  Info,
  BtnLogout,
  BtnLogoutText,
} from './styles';

export default function Profile() {
  const profile = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: `http://192.168.15.99:3028/files/${profile.avatar.path}`,
        }}
      />
      <Row>
        <Label>Nome completo</Label>
        <Info>{profile.name}</Info>
      </Row>
      <Row>
        <Label>Email</Label>
        <Info>{profile.email}</Info>
      </Row>
      <Row>
        <Label>Data de cadastro</Label>
        <Info>{format(parseISO(profile.created_at), 'dd/MM/yyyy')}</Info>
      </Row>
      <BtnLogout onPress={handleLogout}>
        <BtnLogoutText>Logout</BtnLogoutText>
      </BtnLogout>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={25} color={tintColor} />
  ),
};
