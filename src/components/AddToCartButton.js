import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddToCartButton extends Component {
  render() {
    const { handleAddCartToList, productId, productList } = this.props;

    return (
      <button
        type="button"
        onClick={ () => handleAddCartToList(productId, productList) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  handleAddCartToList: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AddToCartButton;
