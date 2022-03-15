import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="Checkout">
        <form>
          <h2>Informações do Comprador</h2>
          <label htmlFor="fullName">
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              name="fullName"
              value={ fullName }
            />
          </label>
          <label htmlFor="checkoutEmail">
            <input
              type="email"
              data-testid="checkout-email"
              placeholder="Email"
              name="checkoutEmail"
              value={ checkoutEmail }
            />
          </label>
          <label htmlFor="cpf">
            <input
              type="text"
              data-testid="checkout-cpf"
              placeholder="CPF"
              name="cpf"
              value={ cpf }
            />
          </label>
          <label htmlFor="phone">
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone"
              name="phone"
              value={ phone }
            />
          </label>
          <label htmlFor="cep">
            <input
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              name="cep"
              value={ cep }
            />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              name="address"
              value={ address }
            />
          </label>
          <button
            type="button"
          >
            Finalizar Compra
          </button>
        </form>
      </section>
    );
  }
}

ShoppingCart.propTypes = {

};
ShoppingCart.defaultProps = {

};

export default Checkout;
