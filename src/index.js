import React from 'react';
import 'bulma/css/bulma.css';
import './scss/theming-styles.scss';
import './scss/common-styles.scss';
import router from './pages/router';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
