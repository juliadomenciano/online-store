import PropTypes from 'prop-types';
import React from 'react';
import './ProductsDetails.css';

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
    const { match: { params } } = this.props;
    const { email, message, index, evaluation } = this.state;
    const rate = { email, message, index };
    evaluation.push(rate);
    localStorage.setItem(params.id, JSON.stringify(evaluation));
    this.onLoadProductReviews();
  }

  render() {
    const { email, message, evaluation } = this.state;
    const num = 5;
    return (
      <>
        <h2>Avaliações</h2>
        <form>

          <div className="infoContainer">
            <label htmlFor="product-detail-email">
              <input
                className="email"
                name="email"
                type="email"
                value={ email }
                placeholder="Email"
                data-testid="product-detail-email"
                onChange={ this.handleChange }
              />
            </label>

            <div>
              {

                [...Array(num)].map((item, i) => {
                  const index = i + 1;
                  return (
                    <label htmlFor="index" key={ index }>
                      <input
                        type="radio"
                        name="index"
                        data-testid={ `${index}-rating` }
                        value={ index }
                        onChange={ this.handleChange }
                      />
                    </label>);
                })
              }

            </div>
          </div>
          <label htmlFor="message">
            <textarea
              data-testid="product-detail-evaluation"
              value={ message }
              name="message"
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
        <section className="container">
          {!evaluation.length
            ? (
              <p>
                Avaliações
              </p>)
            : evaluation.map((item, i) => (
              <div className="review" key={ i }>
                <div className="info">
                  <p>{item.email}</p>
                  <p>{item.index}</p>
                </div>
                <p>{item.message}</p>
              </div>
            ))}
        </section>
      </>
    );
  }
}

ProductsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsDetails;
