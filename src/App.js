import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage';
import SearchList from './components/SearchList';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
  }

  handleAddCartToList = (productId, list, productObj) => {
    const { cartList } = this.state;
    if (productObj) {
      this.setState({ cartList: [...cartList, productObj] });
    } else {
      const selectedProduct = list.find((product) => product.id === productId);
      this.setState({ cartList: [...cartList, selectedProduct] });
    }
  };

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <Route path="/">
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            Carrinho
          </Link>
        </Route>
        <Switch>
          <Route exact path="/">
            <SearchList handleAddCartToList={ this.handleAddCartToList } />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart cartList={ cartList } />
          </Route>
          <Route
            exact
            path="/product/:id"
            render={ (props) => (
              <ProductPage
                handleAddCartToList={ this.handleAddCartToList }
                { ...props }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
