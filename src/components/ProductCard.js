import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, image, price } = this.props;

    return (
      <section className="ProductCard" data-testid="product">
        <h3>{ title }</h3>
        <img src={ image } alt={ title } />
        <p>{ price }</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
