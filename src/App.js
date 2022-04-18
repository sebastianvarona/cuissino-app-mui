import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Orders from './pages/orders';
import Analytics from './pages/analytics';
import Menus from './pages/menus';
import Products from './pages/products';
import Inventory from './pages/inventory';
import Expenses from './pages/expenses';
import Staff from './pages/staff';
import Settings from './pages/settings';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}
