import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './js/containers/App'
import todoApp from './js/reducers/reducers'
import 'bcss';
import './libs/css/normalize';
import 'indexcss';

let store = createStore(todoApp)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)