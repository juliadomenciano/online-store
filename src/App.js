import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductPage from './components/ProductPage';
import SearchList from './components/SearchList';
import ShoppingCart from './components/ShoppingCart';
import { getProductById } from './services/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
  }

  handleAddCartToList = async (productId) => {
    const { cartList } = this.state;
    const selectedProduct = await getProductById(productId);
    this.setState({ cartList: [...cartList, selectedProduct] });
  }

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
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
            render={ (props) => (<ProductPage { ...props } />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
