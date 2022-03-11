import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
    };
  }

  handleDecrease = () => {
    const { quantity } = this.state;
    if (quantity > 0) this.setState({ quantity: quantity - 1 });
  }

  handleIncrease = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  render() {
    const { quantity } = this.state;
    const { title, thumbnail, price } = this.props;

    return (
      <li className="CartItem">
        <button type="button">Remover</button>
        <img src={ thumbnail } alt={ title } />
        <span>{title}</span>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.handleIncrease }
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.handleDecrease }
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
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartItem;
