import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Row,
  Title,
  Field,
  Label,
  Info,
  Background,
  DeliveryInfo,
  DeliverySituation,
  Controls,
  BtnControl,
  BtnDescription,
} from './styles';

export default function DeliveryDetail() {
  return (
    <Container>
      <Background />
      <DeliveryInfo>
        <Row>
          <Icon name="local-shipping" size={20} color="#7D40E7" />
          <Title>Informações da entrega</Title>
        </Row>
        <Row>
          <Field>
            <Label>DESTINATÁRIO</Label>
            <Info>Ludwig Van Beethoven</Info>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <Info>Rua Beethoven, 1729, Diadema - SP, 09960-580</Info>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>PRODUTO</Label>
            <Info>Yamaha SX7</Info>
          </Field>
        </Row>
      </DeliveryInfo>
      <DeliverySituation>
        <Row>
          <Icon name="event" size={20} color="#7D40E7" />
          <Title>Situação da entrega</Title>
        </Row>
        <Row>
          <Field>
            <Label>STATUS</Label>
            <Info>Pendente</Info>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>DATA DA RETIRADA</Label>
            <Info>14/01/2020</Info>
          </Field>
          <Field>
            <Label>DATA DE ENTREGA</Label>
            <Info>--/--/--</Info>
          </Field>
        </Row>
      </DeliverySituation>
      <Controls>
        <BtnControl>
          <Icon name="highlight-off" size={40} color="#E74040" />
          <BtnDescription>Informar Problema</BtnDescription>
        </BtnControl>
        <BtnControl>
          <Icon name="error-outline" size={40} color="#E7BA40" />
          <BtnDescription>Visualizar Problemas</BtnDescription>
        </BtnControl>
        <BtnControl>
          <Iconn name="check-circle-outline" size={40} color="#7D40E7" />
          <BtnDescription>Confirmar Entrega</BtnDescription>
        </BtnControl>
      </Controls>
    </Container>
  );
}

DeliveryDetail.navigationOptions = ({ navigation }) => ({
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  title: 'Detalhes da encomenda',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Entregas');
      }}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
