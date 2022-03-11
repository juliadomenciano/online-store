import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchList from './components/SearchList';
import ListCategories from './components/ListCategories';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchList } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
      <ListCategories />
    </>
  );
}

export default App;
