import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';
import CategoriesList from './CategoriesList';
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

  async componentDidMount() {
    await this.fetchProducts();
  }

  fetchProducts = async () => {
    const { categoryId, query } = this.state;
    const response = await getProductsFromCategoryAndQuery(categoryId, query);
    const productsList = response.results;
    this.setState({ productsList });
  };

  handleQueryInput = ({ target }) => {
    const query = target.value;
    this.setState({ query });
  };

  filterByCategory = ({ target }) => {
    const categoryId = target.value;
    this.setState({
      categoryId,
    });

    this.fetchProducts();
  };

  render() {
    const { productsList, query } = this.state;

    return (
      <>
        <CategoriesList filterByCategory={ this.filterByCategory } />
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
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            Carrinho
          </Link>
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
      </>
    );
  }
}

export default SearchList;
