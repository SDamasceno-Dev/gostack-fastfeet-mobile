/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Show the details of the delivery
 */

// Import of the dependencies to be used
import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import { format, parseISO } from 'date-fns';

// Import the icon to be used
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '~/services/api';

// Import the style used
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
  const { delivered } = data.navigation.state.params;
  const profile = useSelector((state) => state.auth.user);

  async function confirmarRetirada() {
    try {
      await api.put(`/courier/deliveries`, {
        headers: { 'Content-Type': 'application/json' },
        id: deliveryData.id,
        courier_id: Number(profile.id),
        start_date: JSON.parse(JSON.stringify(new Date())),
        withdrawal: true,
      });
      Alert.alert('Sucesso!', 'Entrega retirada com sucesso!!!');
      data.navigation.goBack();
    } catch (err) {
      Alert.alert(
        'Erro na retirada',
        'Verifique o seu horário de retirada e tente novamente. Lembrando que a retirada deve ocorrer entre 08h e 18h!'
      );
    }
  }
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
                : format(parseISO(deliveryData.end_date), 'dd/MM/yyyy')}
            </Info>
          </Field>
        </Row>
      </DeliverySituation>
      <Controls>
        <BtnControl
          onPress={() =>
            delivered || deliveryData.start_date === null
              ? Alert.alert(
                  'Não permitido',
                  'Esta ação só é permitida para entregas retiradas e não concluídas'
                )
              : data.navigation.navigate('DeliveryProblem', deliveryData)
          }>
          <Icon
            name="highlight-off"
            size={40}
            color={
              delivered || deliveryData.start_date === null
                ? 'rgba(0,0,0,0.1)'
                : '#E74040'
            }
          />
          <BtnDescription>Informar Problema</BtnDescription>
        </BtnControl>
        <BtnControl
          onPress={() =>
            deliveryData.start_date === null
              ? Alert.alert(
                  'Não permitido',
                  'Esta ação só é permitida para entregas retiradas'
                )
              : data.navigation.navigate('DeliveryProblemView', deliveryData)
          }>
          <Icon
            name="error-outline"
            size={40}
            color={
              deliveryData.start_date === null ? 'rgba(0,0,0,0.1)' : '#E7BA40'
            }
          />
          <BtnDescription>Visualizar Problemas</BtnDescription>
        </BtnControl>
        {deliveryData.start_date === null ? (
          <BtnControl onPress={() => confirmarRetirada()}>
            <Iconn
              name="check-circle-outline"
              size={40}
              color={delivered ? 'rgba(0,0,0,0.1)' : '#7D40E7'}
            />
            <BtnDescription>Retirar Entrega</BtnDescription>
          </BtnControl>
        ) : (
          <BtnControl
            onPress={() =>
              delivered
                ? Alert.alert(
                    'Não permitido',
                    'Esta encomenda já foi entregue!'
                  )
                : data.navigation.navigate('DeliveryConfirm', deliveryData)
            }>
            <Iconn
              name="check-circle-outline"
              size={40}
              color={delivered ? 'rgba(0,0,0,0.1)' : '#7D40E7'}
            />
            <BtnDescription>Confirmar Entrega</BtnDescription>
          </BtnControl>
        )}
      </Controls>
    </Container>
  );
}

// Configuration of Navigation for this page
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
