import React, { Component } from 'react';
import './SearchList.css';

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
      </section>
    );
  }
}

export default SearchList;
