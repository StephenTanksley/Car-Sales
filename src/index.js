import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux / react-redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//reducer import
import reducer from './reducers/reducers'

import 'bulma/css/bulma.css';
import './styles.scss';

//2) set up store and provider
const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(

//we wrap the <App /> component in the Provider component and pass along our store={store} as a prop so every nested component has access to the state store.

<Provider store={store}>
    <App />
</Provider>, rootElement);