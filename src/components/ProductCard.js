import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddToCartButton from './AddToCartButton';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, image, price,
      handleAddCartToList, productId, productList } = this.props;

    return (
      <section className="ProductCard" data-testid="product">
        <h3>{ title }</h3>
        <img src={ image } alt={ title } />
        <p>{ price }</p>
        <AddToCartButton
          handleAddCartToList={ handleAddCartToList }
          productId={ productId }
          productList={ productList }
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
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
