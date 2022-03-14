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
    console.log(this.state);
  }

  render() {
    const { title, thumbnail, price, id } = this.state;
    return (
      <div>
        <section>
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </section>
        <ProductsDetails productId={ id } />
      </div>

    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default ProductPage;
