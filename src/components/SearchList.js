import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import './SearchList.css';

class SearchList extends Component {
  constructor() {
    super();

    this.state = {
      productsList: [],
    };
  }

  async componentDidMount() {
    const response = await getProductsFromCategoryAndQuery(
      'MLB1403',
      'coca-cola',
    );
    const productsList = response.results;
    this.setState({ productsList });
  }

  render() {
    const { productsList } = this.state;

    return (
      <section className="SearchList">
        <input type="text" />
        {!productsList.length && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        {productsList.length
          && productsList.map((product) => (
            <ProductCard
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ product.price }
            />
          ))}
      </section>
    );
  }
}

export default SearchList;
