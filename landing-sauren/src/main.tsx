import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppThemeProvider } from './components/AppThemeProvider';
import './assets/fonts/fonts.css'; // Importa las fuentes
import { HashRouter as Router } from 'react-router-dom'; // Cambia BrowserRouter por HashRouter

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <Router>
        <App />
      </Router>
    </AppThemeProvider>
  </React.StrictMode>
);