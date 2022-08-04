import React from 'react';
import { Route, Routes } from 'react-router';
import Checkout from './pages/Checkout';
import OrderPlaced from './pages/OrderPlaced';
import Products from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-placed" element={<OrderPlaced />} />
    </Routes>
  );
}

export default App;
