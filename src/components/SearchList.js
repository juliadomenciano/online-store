import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListCategories from './ListCategories';
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

  async componentDidMount() {
    await this.fetchProducts();
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

  FilterByCategory =({ target }) => {
    const categoryId = target.value;
    this.setState({
      categoryId,
    });

    this.fetchProducts();
  }

  render() {
    const { productsList, query } = this.state;

    return (
      <main className="pageContainer">
        <section className="ListCategories">
          <ListCategories filterByCategory={ this.FilterByCategory } />
        </section>
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
            <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
          </form>
          {Boolean(!productsList.length) && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}

          {
            Boolean(productsList.length)
           && productsList.map((product) => (
             <ProductCard
               key={ product.id }
               title={ product.title }
               image={ product.thumbnail }
               price={ product.price }
             />
           ))
          }

        </section>

      </main>
    );
  }
}

export default SearchList;
