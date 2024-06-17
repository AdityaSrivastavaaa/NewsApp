import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleDetails from './components/ArticleDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:url" element={<ArticleDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
