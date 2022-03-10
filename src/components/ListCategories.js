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
    this.fetchAPI();
  }

  fetchAPI = async () => {
    const category = await getCategories();
    this.setState({
      categories: category,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2>Categoris:</h2>
        <div>
          {categories.map((item) => (
            <li key={ item.id } data-testid="category">
              {item.name}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default ListCategories;
