import React from 'react';
import CartItem from '../cartItem';
import CartFooter from '../cartFooter';

export default function ListCart() {
  return (
    <>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th width="4%">STT</th>
                    <th>Name</th>
                    <th width="15%">Price</th>
                    <th width="4%">Quantity</th>
                    <th width="25%">Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  <CartItem />
                </tbody>
                <CartFooter />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
