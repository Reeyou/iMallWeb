import React from 'react'
import ReactDom from 'react-dom'
import App from './routers'
import { Provider } from 'mobx-react'
import stores from './store'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'

ReactDom.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)