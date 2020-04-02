import React from 'react';
import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Row,
  DelivTitle,
  DelivGuide,
  DelivGuideLine,
  DelivGuideItems,
  DelivGuideMark,
  DelivGuideIndicator,
  DelivGuideLabel,
  DelivStatus,
  Label,
  Info,
  DelivViewDetails,
  DelivViewDetailsText,
} from './styles';

export default function Delivery({ data, navigation }) {
  const guideMark = true;
  return (
    <Container>
      <Row>
        <Icon name="local-shipping" size={20} color="#7D40E7" />
        <DelivTitle>{data.product}</DelivTitle>
      </Row>
      <Row>
        <DelivGuide>
          <DelivGuideLine />
          <DelivGuideItems>
            <DelivGuideIndicator>
              <DelivGuideMark data={guideMark} />
              <DelivGuideLabel>Aguardando Retirada</DelivGuideLabel>
            </DelivGuideIndicator>
            <DelivGuideIndicator>
              <DelivGuideMark data={data.start_date} />
              <DelivGuideLabel>Retirada</DelivGuideLabel>
            </DelivGuideIndicator>
            <DelivGuideIndicator>
              <DelivGuideMark data={data.end_date} />
              <DelivGuideLabel>Entregue</DelivGuideLabel>
            </DelivGuideIndicator>
          </DelivGuideItems>
        </DelivGuide>
      </Row>
      <Row>
        <DelivStatus>
          <Label>Data</Label>
          <Info>{format(parseISO(data.created_at), 'dd/MM/yyyy')}</Info>
        </DelivStatus>
        <DelivStatus>
          <Label>Cidade</Label>
          <Info>{data.recipient.city}</Info>
        </DelivStatus>
        <DelivViewDetails
          onPress={() => navigation.navigate('DeliveryDetail', { data })}>
          <DelivViewDetailsText>Ver detalhes</DelivViewDetailsText>
        </DelivViewDetails>
      </Row>
    </Container>
  );
}
