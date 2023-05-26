import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import randomColor from "randomcolor";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Details from "./pages/Details.js"
import Home from "./pages/Home.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// reportWebVitals();
