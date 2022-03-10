import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchList from './components/SearchList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ SearchList } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
