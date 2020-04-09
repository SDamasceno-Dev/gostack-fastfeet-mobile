/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Button to be used in the app
 */

// Import of the dependencies to be used
import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// Import the style used
import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

// PropTypes necessary
Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
