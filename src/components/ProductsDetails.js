import PropTypes from 'prop-types';
import React from 'react';

class ProductsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      menssage: '',
      rating: [],
    };
  }

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

handleSubmit = (event) => {
  const { email, menssage, rating } = this.state;
  event.preventDefault();
  /* JSON.parse(localStorage.getItem('key')) */
  this.setState({ email, menssage, rating });
  const arr = [email, menssage, rating];
  localStorage.setItem('key', JSON.string(arr));
}

render() {
  const { email, menssage, rating } = this.state;
  return (
    <form>
      <h2>Avaliações</h2>
      <label htmlFor="product-detail-email">
        <input
          name="email"
          type="email"
          value={ email }
          placeholder="Email"
          data-testid="product-detail-email"
          onChange={ this.handleChange }
        />
      </label>
      <label htmlFor="rating">
        Avalie de 1 a 5
        <input
          type="number"
          name="rating"
          value={ rating }
        />
      </label>
      <label htmlFor="textArea">
        <textarea
          data-testid="product-detail-evaluation"
          value={ menssage }
          placeholder="Mensagem (opcional)"
          onChange={ this.handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="submit-review-btn"
        onClick={ this.handleSubmit }
      >
        Avaliar
      </button>
    </form>
  );
}
}
ProductsDetails.propTypes = {
  email: PropTypes.func.isRequired,
  menssage: PropTypes.string,
  rating: PropTypes.string,
};
export default ProductsDetails;
