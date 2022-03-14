import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchList from './components/SearchList';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
    };
  }

  handleAddCartToList = (productId, list) => {
    const { cartList } = this.state;
    const selectedProduct = list.find((product) => product.id === productId);
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
