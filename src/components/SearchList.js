import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import './SearchList.css';

class SearchList extends Component {
  constructor() {
    super();

    this.state = {
      categoryId: '',
      query: '',
      productsList: [],
    };
  }

  fetchProducts = async () => {
    const { categoryId, query } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      categoryId,
      query,
    );
    const productsList = response.results;
    this.setState({ productsList });
  }

  handleQueryInput = ({ target }) => {
    const query = target.value;
    this.setState({ query });
  }

  render() {
    const { productsList, query } = this.state;

    return (
      <section className="SearchList">
        <form>
          <input
            data-testid="query-input"
            type="text"
            value={ query }
            onChange={ this.handleQueryInput }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.fetchProducts }
          >
            Pesquisar
          </button>
        </form>
        {Boolean(!productsList.length) && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
        {Boolean(productsList.length)
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
