import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './reducers/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './components/app/presentation/layout/layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </Router>
  </React.StrictMode>
);

