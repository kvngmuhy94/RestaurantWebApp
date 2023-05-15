import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './context/ContextProvider';
import { AuthProvider } from './context/AuthProvider';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import CartProvider from './context/CartContext';
import { Elements } from '@stripe/react-stripe-js';


if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextProvider>
          <CartProvider>
            
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
            
          </CartProvider>
        </ContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
