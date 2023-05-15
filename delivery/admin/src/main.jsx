import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './context/ContextProvider';
import { AuthProvider } from './context/AuthProvider';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </ContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
