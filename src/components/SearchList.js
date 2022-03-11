import React, { Component } from 'react';
import './SearchList.css';
import { Link } from 'react-router-dom';

class SearchList extends Component {
  constructor() {
    super();

    this.state = {
      listProducts: [],
    };
  }

  render() {
    const { listProducts } = this.state;

    return (
      <section className="SearchList">
        <input type="text" />
        { !listProducts.length && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) }
        <Link data-testid="shopping-cart-button" to="/shopping-cart">Carrinho</Link>
      </section>
    );
  }
}

export default SearchList;
