import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
    };
  }

  componentDidMount() {
    const { quantity } = this.props;
    this.setState({ quantity });
  }

  render() {
    const { quantity } = this.state;
    const { id, title, thumbnail, price, handleDecrease, handleIncrease } = this.props;

    return (
      <li className="CartItem">
        <button type="button">Remover</button>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-name">{title}</span>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => handleDecrease(id) }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => handleIncrease(id) }
          >
            +
          </button>
        </div>
        <span>{`R$ ${price}`}</span>
      </li>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
};

export default CartItem;
