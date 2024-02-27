import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/customBoostrap.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import { Onepiece } from './Onepiece'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Onepiece></Onepiece>
    </Provider>
  </React.StrictMode>,
)
