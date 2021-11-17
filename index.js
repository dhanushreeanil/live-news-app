import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import { startGetNewsArticles } from './actions/ArticlesActions';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(startGetNewsArticles({ category: 'headlines'}))

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render( rootElement, 
  document.getElementById('root')
)
