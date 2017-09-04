import React, { Component } from 'react';
import SearchRecipes from '../SearchRecipes/SearchRecipes';
import RecipeList from '../RecipeList/RecipeList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="h1">Sup foo</h1>
        <SearchRecipes />
        <RecipeList />
      </div>
    )
  }
}

export default App;