import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchList from './components/SearchList';
import ListCategories from './components/ListCategories';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ SearchList } />
        </Switch>
      </BrowserRouter>
      <ListCategories />
    </>
  );
}

export default App;
