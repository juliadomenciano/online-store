import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <aside className="ListCategories">
        <h2>Categorias:</h2>
        <ul>
          {categories.map((item) => (
            <li key={ item.id } data-testid="category">
              {item.name}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default ListCategories;

// Pair programming Lazaro Ramos, Leonardo Begnossi
