import Header from '../components/Header';
import React, { useState, ChangeEvent, useEffect } from 'react';

import AddProduct from '../components/dialogs/AddProductDialog';
import DeleteProduct from '../components/dialogs/DeleteProductDialog';
import ProductList from '../components/ProductList';











export default function HomePage() {

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="text-3xl font-bold text-blue-600">PRODUCTS</div>
        <div className="flex items-center justify-space-evenly gap-8 h-full">
          <AddProduct />
          <DeleteProduct />
        </div>
        <ProductList />
      </div>
    </>
  );
}






