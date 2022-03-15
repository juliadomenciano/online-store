import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import ProductsDetails from './ProductsDetails';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const product = await getProductById(params.id);
    this.setState({ ...product });
  }

  render() {
    const { title, thumbnail, price } = this.state;
    return (
      <div>
        <section>
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </section>
        <ProductsDetails { ...this.props } />
      </div>

    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default ProductPage;
