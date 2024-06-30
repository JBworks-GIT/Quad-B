import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../components/App.jsx'
import '../styles/index.css'
import Customers from './customers.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Customers/>
  </React.StrictMode>,
)
