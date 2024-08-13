import React from 'react'
import ReactDOM from 'react-dom/client'
import '../Style/index.css';
import { App } from '../App';
import { ListaTareas } from './ListaTareas';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <ListaTareas></ListaTareas>
  </React.StrictMode>,
)
