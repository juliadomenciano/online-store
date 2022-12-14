import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCategories } from '../services/api';
import './CategoriesList.css';

class CategoriesList extends Component {
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
    const { filterByCategory } = this.props;

    return (
      <aside className="CategoriesList">
        <h2>Categorias:</h2>
        <ul>
          {categories.map((item) => (
            <li key={ item.id } data-testid="category">
              <label htmlFor={ item.id }>
                <input
                  id={ item.id }
                  type="radio"
                  name="categories"
                  value={ item.id }
                  onChange={ filterByCategory }
                />
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  filterByCategory: PropTypes.func.isRequired,
};

export default CategoriesList;

// Pair programming Lazaro Ramos, Leonardo Begnossi
