import PropTypes from 'prop-types';
import React from 'react';
import './ShoppingCart.css';

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
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
        {Boolean(cartList.length) && (
          <p>
            Colocar aqui um map renderizando cada item da cartList
            (esse parágrafo é só um exemplo)
          </p>
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
