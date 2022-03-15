import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProductReview extends Component {
  render() {
    const { evaluations } = this.props;
    return (
      <section>
        <p>{evaluations.email}</p>
        <p>{evaluations.message}</p>
        <p>{evaluations.index}</p>
      </section>
    );
  }
}

ProductReview.propTypes = {
  evaluations: PropTypes.objectOf(Object).isRequired,
};

export default ProductReview;
