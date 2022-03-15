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
      itemsQuantity: {},
    };
  }

  handleAddCartToList = (productId, list, productObj) => {
    const { cartList } = this.state;
    if (productObj) {
      this.setState({
        cartList: [...cartList, productObj],
      }, this.updateQuantity);
    } else {
      const selectedProduct = list.find((product) => product.id === productId);
      this.setState({ cartList: [...cartList, selectedProduct] }, this.updateQuantity);
    }
  };

  handleDecrease = (productId) => {
    const { cartList, itemsQuantity } = this.state;
    if (itemsQuantity[productId] > 0) {
      const updatedList = [...cartList];
      const currItem = cartList.find((item) => item.id === productId);
      const index = cartList.indexOf(currItem);
      updatedList.splice(index, 1);
      this.setState({ cartList: updatedList }, this.updateQuantity);
    }
  }

  handleIncrease = (productId) => {
    const { cartList, itemsQuantity } = this.state;
    if (itemsQuantity[productId] > 0) {
      const updatedList = [...cartList];
      const currItem = cartList.find((item) => item.id === productId);
      this.setState({ cartList: [...updatedList, currItem] }, this.updateQuantity);
    }
  }

  updateQuantity = () => {
    const { cartList } = this.state;
    const cartItems = [...new Set(cartList)];

    const itemsQuantity = cartItems.reduce((obj, curr) => {
      const accObj = obj;
      accObj[curr.id] = cartList.reduce((acc, item) => {
        if (item.id === curr.id) return acc + 1;
        return acc;
      }, 0);
      return { ...obj, ...accObj };
    }, {});

    this.setState({ itemsQuantity });
  }

  render() {
    const { cartList, itemsQuantity } = this.state;

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
            <ShoppingCart
              cartList={ cartList }
              itemsQuantity={ itemsQuantity }
              handleDecrease={ this.handleDecrease }
              handleIncrease={ this.handleIncrease }
            />
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
