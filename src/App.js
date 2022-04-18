import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}
