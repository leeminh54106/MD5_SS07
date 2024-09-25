import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { act_add } from '../../redux/actions';

export default function ProductItem(props) {
  //Lấy dữ liệu thông qua ditructuring
  const { product } = props;

  //Khai báo dispatch để nhận biết hành động
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  //Hàm thêm mới sản phẩm vào giỏ hàng
  const handleAddQuantity = () => {
    dispatch(act_add(product, quantity));
  };

  return (
    <>
      <div className="my-1">
        <div className="media product">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={product.image} alt="pizza" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{product.productName}</h4>
            <p>{product.title}</p>
            <input
              className="text-[15pxs]"
              name="quantity-product-1"
              type="number"
              onChange={(e) => setQuantity(+e.target.value)}
              value={quantity}
              min={1}
            />
            <button data-product={1} className="price " onClick={handleAddQuantity}>
              {product.price} USD
            </button>
            <span className="price"> {product.price} USD</span>
          </div>
          <div className="flex items-center justify-center">
            <button className=" px-4 py-3 bg-[#5b75e6] text-[#fff] rounded-[6px]">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    </>
  );
}
