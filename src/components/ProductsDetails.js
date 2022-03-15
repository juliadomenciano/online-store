import PropTypes from 'prop-types';
import React from 'react';

class ProductsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      menssage: '',
      rating: 0,
      arr: [],
      reviews: [],
    };
  }

  componentDidMount() {
    this.loadReviews();
    console.log(this.props.productId);
  }

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

handleSubmit = () => {
  const { match: { params } } = this.props;
  const { email, menssage, rating, arr } = this.state;
  const rate = { email, menssage, rating };
  arr.push(rate);
  localStorage.setItem(params.id, JSON.stringify(arr));
  this.loadReviews();
}

loadReviews = () => {
  const { match: { params } } = this.props;
  const reviews = JSON.parse(localStorage.getItem(params.id));
  if (reviews) {
    this.setState({
      reviews,
    });
  }

  console.log(reviews);
}

render() {
  const { email, menssage, rating, reviews } = this.state;
  return (
    <>
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
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="menssage">
          <textarea
            data-testid="product-detail-evaluation"
            value={ menssage }
            name="menssage"
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
      <section>
        {!reviews
          ? (
            <p>
              Avaliações
            </p>)
          : reviews.map((item, index) => (
            <div key={ index }>
              <p>{item.email}</p>
              <p>{item.rating}</p>
              <p>{item.menssage}</p>
            </div>
          ))}
      </section>
    </>
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
