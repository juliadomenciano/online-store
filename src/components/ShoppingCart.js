import PropTypes from 'prop-types';
import React from 'react';
import CartItem from './CartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.setState = {
      cartList: [],
    };
  }

  componentDidMount() {
    const { cartList } = this.props;
    this.setState({ cartList });
  }

  render() {
    const { cartList } = this.state;

    return (
      <section className="ShoppingCart">
        {Boolean(!cartList.length) && (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
        {Boolean(cartList.length)
          && (
            <ul>
              {cartList.map((item) => <CartItem key={ item.id } { ...item } />)}
            </ul>
          )}
      </section>
    );
  }
}

ShoppingCart.defaultProps = {
  cartList: [],
};

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object),
};

export default ShoppingCart;
