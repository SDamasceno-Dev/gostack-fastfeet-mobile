/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Input to be used in the app
 */

// Import of the dependencies to be used
import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

// Import the style used
import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="#999999" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

// PropTypes necessary
Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
