import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux / react-redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//reducer import
import { reducer } from './reducers/reducers'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);