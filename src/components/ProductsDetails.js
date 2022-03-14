import PropTypes from 'prop-types';
import React from 'react';

class ProductsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      menssage: '',
      rating: [],
      arr: [],
    };
  }

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

handleSubmit = () => {
  const { productId } = this.props;
  const { email, menssage, rating, arr } = this.state;
  this.setState({ email, menssage, rating });
  const rate = { email, menssage, rating };
  this.setState((prevState) => ({
    arr: [prevState.arr, rate],
  }));
  localStorage.setItem(productId, JSON.stringify(rate));
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
  menssage: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};
export default ProductsDetails;
