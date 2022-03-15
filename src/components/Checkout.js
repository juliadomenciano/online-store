import PropTypes from 'prop-types';
import React from 'react';
import { getProductById } from '../services/api';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      /* fullName: '',
      checkoutEmail: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '', */
    };
  }

  async componentDidMount() {
    const { itemsQuantity } = this.props;
    /*     this.setState({ ...itemsQuantity }); */
    await Object.keys(itemsQuantity).map((id) => {
      const product = getProductById(id);
      this.setState({ ...product }, () => console.log(this.state));
    });
  }

  render() {
    const { fullName, checkoutEmail, cpf, phone, cep, address } = this.state;
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

Checkout.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

Checkout.defaultProps = {

};

export default Checkout;
