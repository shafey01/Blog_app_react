import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Author } from './pages/authors/Author';

const App = () => (
  <>
    <h1>App</h1>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="authors/:id" element={<Author />} />
    </Routes>
  </>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
