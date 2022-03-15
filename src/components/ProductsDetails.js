import PropTypes from 'prop-types';
import React from 'react';
import ProductReview from './ProductReview';

class ProductsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      evaluation: [],
      index: [],
    };
  }

  componentDidMount() {
    this.onLoadProductReviews();
  }

  onLoadProductReviews = () => {
    const { match: { params } } = this.props;
    const evaluation = JSON.parse(localStorage.getItem(params.id));
    if (evaluation) {
      this.setState({
        evaluation,
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = () => {
    const { email, message, index, evaluation } = this.state;
    const rate = { email, message, index };
    this.setState({
      evaluation: [...evaluation, rate],
    }, this.storageEvaluations);
  }

  storageEvaluations = () => {
    const { match: { params } } = this.props;
    const { evaluation } = this.state;
    localStorage.setItem(params.id, JSON.stringify(evaluation));
    this.onLoadProductReviews();
  }

  render() {
    const { email, message, index, evaluation } = this.state;
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
        <label htmlFor="index">
          Avalie de 1 a 5
          <input
            type="number"
            name="index"
            data-testid={ `${index}-index` }
            value={ index }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="textArea">
          <textarea
            data-testid="product-detail-evaluation"
            value={ message }
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
        {evaluation.map((evaluations) => (<ProductReview
          key={ evaluations.email }
          evaluations={ evaluations }
        />))}

      </form>
    );
  }
}

ProductsDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default ProductsDetails;
