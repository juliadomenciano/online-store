import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <section className="ShoppingCart">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </section>
    );
  }
}

export default ShoppingCart;
