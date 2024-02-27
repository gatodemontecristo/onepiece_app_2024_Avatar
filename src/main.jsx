import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/customBoostrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'animate.css/animate.min.css'
import 'atropos/atropos.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { Onepiece } from './Onepiece'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <Provider store={store}>
      <Onepiece></Onepiece>
    </Provider>
    </>
  // </React.StrictMode>,
)
