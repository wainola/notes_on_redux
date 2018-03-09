import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import store from './store/index';
import { addArticle } from './actions/index';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// elevating this object to the console.
window.store = store;
window.addArticle = addArticle;
// window.selectPerson = selectPerson;

ReactDOM.render(
    // Provider makes the React app aware of the Store
    <Provider store={store}>
        <App/>
    </Provider>
  , document.querySelector('.container'));
