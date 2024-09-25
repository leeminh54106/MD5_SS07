const dbProduct = [
  {
    productId: 'SP001',
    price: 30,
    quantity: 1,
    productName: 'Pizza',
    image: 'images/pizza.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
  },
  {
    productId: 'SP002',
    quantity: 10,
    price: 15,
    productName: 'Hamburger',
    image: 'images/Hamburger.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
  },
  {
    productId: 'SP003',
    quantity: 5,
    price: 20,
    productName: 'Bread',
    image: 'images/bread.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
  },
  {
    productId: 'SP004',
    quantity: 6,
    price: 10,
    productName: 'Cake',
    image: 'images/Cake.jpg',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
  },
];

/**
 * TRả về 1 danh sách sản phẩm
 * @param {*} state toàn bộ dữ liệu
 * @param {*} action Hành động
 * @returns trả về một danh sách sản phẩm
 * Auth: NTSOn (25/09/2024)
 */

const productReducer = (state = dbProduct, action) => {
  return state;
};

export default productReducer;
