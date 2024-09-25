import React from 'react';
import Header from './components/header';
import ListProduct from './components/listProduct';
import ListCart from './components/listCart';

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <ListProduct />
          <ListCart />
        </div>
      </div>
    </>
  );
}
