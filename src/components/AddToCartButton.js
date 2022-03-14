import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddToCartButton extends Component {
  render() {
    const { handleAddCartToList, productId, dataTestId } = this.props;

    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ () => handleAddCartToList(productId) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  handleAddCartToList: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default AddToCartButton;
