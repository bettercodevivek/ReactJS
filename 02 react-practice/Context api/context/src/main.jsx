import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Myprovider } from './Context/Countcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myprovider>
      <App/>
    </Myprovider>
  </React.StrictMode>,
)
