import React from 'react';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
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

export default function DeliveryDetail(data) {
  const deliveryData = data.navigation.state.params.data;
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
            <Info>{deliveryData.recipient.name}</Info>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>ENDEREÇO DE ENTREGA</Label>
            <Info>{`${deliveryData.recipient.street}, ${deliveryData.recipient.number}, (${deliveryData.recipient.complement}) ${deliveryData.recipient.city} - ${deliveryData.recipient.state}, ${deliveryData.recipient.zipcode}`}</Info>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>PRODUTO</Label>
            <Info>{deliveryData.product}</Info>
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
            <Info>
              {deliveryData.end_date === null ? 'Pendente' : 'Entregue'}
            </Info>
          </Field>
        </Row>
        <Row>
          <Field>
            <Label>DATA DA RETIRADA</Label>
            <Info>
              {deliveryData.start_date === null
                ? '--/--/--'
                : format(parseISO(deliveryData.start_date), 'dd/MM/yyyy')}
            </Info>
          </Field>
          <Field>
            <Label>DATA DE ENTREGA</Label>
            <Info>
              {deliveryData.end_date === null
                ? '--/--/--'
                : format(parseISO(deliveryData.start_date), 'dd/MM/yyyy')}
            </Info>
          </Field>
        </Row>
      </DeliverySituation>
      <Controls>
        <BtnControl
          onPress={() =>
            data.navigation.navigate('DeliveryProblem', deliveryData)
          }>
          <Icon name="highlight-off" size={40} color="#E74040" />
          <BtnDescription>Informar Problema</BtnDescription>
        </BtnControl>
        <BtnControl
          onPress={() =>
            data.navigation.navigate('DeliveryProblemView', deliveryData)
          }>
          <Icon name="error-outline" size={40} color="#E7BA40" />
          <BtnDescription>Visualizar Problemas</BtnDescription>
        </BtnControl>
        <BtnControl
          onPress={() => data.navigation.navigate('DeliveryConfirm', { data })}>
          <Iconn name="check-circle-outline" size={40} color="#7D40E7" />
          <BtnDescription>Confirmar Entrega</BtnDescription>
        </BtnControl>
      </Controls>
    </Container>
  );
}

DeliveryDetail.navigationOptions = (data) => ({
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  title: 'Detalhes da encomenda',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        data.navigation.goBack();
      }}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
