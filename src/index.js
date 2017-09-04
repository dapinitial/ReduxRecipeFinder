import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import FavoriteRecipeList from './components/FavoriteRecipeList/FavoriteRecipeList'; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/favorites' component={FavoriteRecipeList} />
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);