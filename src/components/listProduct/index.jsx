import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../productItem';

export default function ListProduct() {
  const listProducts = useSelector((state) => state.listProducts);
  return (
    <>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {listProducts.map((product) => {
                return <ProductItem key={product.productId} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
