import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, image, price,
      handleAddCartToList, productId } = this.props;

    return (
      <section className="ProductCard" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ `/product/${productId}` }
        >
          <h3>{ title }</h3>
          <img src={ image } alt={ title } />
          <p>{ price }</p>
        </Link>
        <AddToCartButton
          handleAddCartToList={ handleAddCartToList }
          productId={ productId }
          dataTestId="product-add-to-cart"
        />
      </section>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddCartToList: PropTypes.func.isRequired,
  productId: PropTypes.string.isRequired,
};

export default ProductCard;
