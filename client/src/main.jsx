import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './context/ContextProvider';
import { AuthProvider } from './context/AuthProvider';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { Toaster } from 'react-hot-toast';

// import { Elements } from '@stripe/react-stripe-js';



  disableReactDevTools();


// options={{ "client-id": "process.env.REACT_APP_PAYPAL_CLIENT_ID"}}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider  >
    <BrowserRouter>
      <AuthProvider>
        <ContextProvider>      
            <Toaster />
            <Routes>
              <Route path='/*' element={<App />} />
            </Routes>
            
        </ContextProvider>
      </AuthProvider>
    </BrowserRouter>
    </PayPalScriptProvider>
  </React.StrictMode>,
)
