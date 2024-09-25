import React from 'react';

export default function CartFooter() {
  return (
    <>
      <tfoot id="my-cart-footer">
        <tr>
          <td colSpan={4}>
            There are <b>2</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            630 USD
          </td>
        </tr>
      </tfoot>
    </>
  );
}
