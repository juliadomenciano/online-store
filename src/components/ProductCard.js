import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import FreeShipping from './FreeShipping';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const {
      title,
      image,
      price,
      handleAddCartToList,
      productId,
      productList,
      availableQuantity,
      itemsQuantity,
      freeShipping,
    } = this.props;

    return (
      <section className="ProductCard" data-testid="product">
        <Link data-testid="product-detail-link" to={ `/product/${productId}` }>
          <div className="ProductCard-Image">
            <img src={ image } alt={ title } />
          </div>
          <div className="ProductCard-Description">
            {freeShipping && <FreeShipping />}
            <h3 className="title">{title}</h3>
            <p>{price}</p>
          </div>
        </Link>
        <AddToCartButton
          className="ProductCard-button"
          handleAddCartToList={ handleAddCartToList }
          productId={ productId }
          dataTestId="product-add-to-cart"
          productList={ productList }
          itemsQuantity={ itemsQuantity }
          availableQuantity={ availableQuantity }
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
  availableQuantity: PropTypes.number.isRequired,
  itemsQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

export default ProductCard;
