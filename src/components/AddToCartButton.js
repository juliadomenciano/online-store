import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddToCartButton extends Component {
  render() {
    const {
      handleAddCartToList,
      productId,
      productList,
      productObj,
      dataTestId,
      availableQuantity,
      itemsQuantity,
    } = this.props;

    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ () => handleAddCartToList(productId, productList, productObj) }
        disabled={ availableQuantity === itemsQuantity[productId] }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.defaultProps = {
  productId: '',
  productList: [],
  productObj: undefined,
};

AddToCartButton.propTypes = {
  handleAddCartToList: PropTypes.func.isRequired,
  productId: PropTypes.string,
  productList: PropTypes.arrayOf(PropTypes.object),
  productObj: PropTypes.objectOf(PropTypes.any),
  dataTestId: PropTypes.string.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  itemsQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default AddToCartButton;
