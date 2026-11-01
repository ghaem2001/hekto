import App from './App.jsx'
import './index.css'
import "./assets/icons/fontAwesome/css/all.min.css"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProductsProvider from './context/ProductsContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <App/>
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>
)
