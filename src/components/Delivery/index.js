/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Tela de Dashboard das entregas associadas ao Courier
 */

// Import of the dependencies to be used
import React from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

// Import the icon to be used
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import the style used
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

export default function Delivery({ data, navigation, delivered }) {
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
          onPress={() =>
            navigation.navigate('DeliveryDetail', {
              data,
              delivered,
            })
          }>
          <DelivViewDetailsText>Ver detalhes</DelivViewDetailsText>
        </DelivViewDetails>
      </Row>
    </Container>
  );
}

// PropTypes necessary
Delivery.propTypes = {
  data: PropTypes.arrayOf([PropTypes.number, PropTypes.string, PropTypes.array])
    .isRequired,
  navigation: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
  delivered: PropTypes.bool,
};

Delivery.defaultProps = {
  delivered: null,
};
