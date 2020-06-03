import React from 'react';
import { components as ReactSelectComponent } from 'react-select';

import Cross from '../Cross/Cross';

const MultiValueRemove = props => (
  <ReactSelectComponent.MultiValueRemove {...props}>
    <Cross />
  </ReactSelectComponent.MultiValueRemove>
);

MultiValueRemove.propTypes = ReactSelectComponent.MultiValueRemove.propTypes;
MultiValueRemove.defaultProps = ReactSelectComponent.MultiValueRemove.defaultProps;

export default MultiValueRemove;
