/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Visualization of the problems of this Delivery
 */

// Import of the dependencies to be used
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { parseISO, format } from 'date-fns';

// Import the icon to be used
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  Background,
  DeliveryTitle,
  DeliveryProblemList,
  DelivProbItem,
  DelivProbDescription,
  DelivProbData,
} from './styles';

export default function DeliveryProblemView(data) {
  const deliveryData = data.navigation.state.params;

  const [delivProblems, setDelivProblems] = useState(['']);

  // Get all Delivery Problems
  useEffect(() => {
    async function loadDelivProblems() {
      const response = await api.get(`/delivery/${deliveryData.id}/problems`);
      setDelivProblems(response.data);
    }

    loadDelivProblems();
  }, [deliveryData.id]);

  return (
    <Container>
      <Background />
      <DeliveryTitle>{deliveryData.product}</DeliveryTitle>

      <DeliveryProblemList
        data={delivProblems.delivery}
        keyExtractor={(delivProblem) => String(delivProblem.id)}
        renderItem={({ item: deliveryProblem }) => (
          <DelivProbItem>
            <DelivProbDescription>
              {deliveryProblem.description}
            </DelivProbDescription>
            <DelivProbData>
              {format(parseISO(deliveryProblem.created_at), 'dd/MM/yyyy')}
            </DelivProbData>
          </DelivProbItem>
        )}
      />
    </Container>
  );
}

// Configuration of Navigation for this page
DeliveryProblemView.navigationOptions = (data) => ({
  headerTransparent: true,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  title: 'Visualizar problemas',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        data.navigation.goBack();
      }}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
