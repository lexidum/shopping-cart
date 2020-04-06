const addProduct = require("./cart/addProduct");
const removeProduct = require("./cart/removeProduct");
const showFunds = require("./cart/showFunds");
const showStocks = require("./cart/showStocks");
const showTotal = require("./cart/showTotal");
const showCart = require("./cart/showCart");
const pay = require("./cart/pay");
const totalAmountWithDiscount = require("./cart/totalAmountWithDiscount");
const showDiscount = require("./cart/showDiscount");
const vouchers = {
  happy: {
    type: "total",
    discount: 0.5,
  },
  blouses: {
    type: "product",
    product: "id3",
    discount: 0.3,
  },
};
let products = {
  id1: {
    id: "id1",
    name: "pantofi",
    price: 50,
    stock: 3,
  },
  id2: {
    id: "id2",
    name: "blugi",
    price: 60,
    stock: 2,
  },
  id3: {
    id: "id3",
    name: "bluza",
    price: 30,
    stock: 4,
  },
};
let funds = 300;
let cart = [];
cart = addProduct(cart, products, "id1");
cart = addProduct(cart, products, "id1");
cart = addProduct(cart, products, "id1");
cart = addProduct(cart, products, "id1");
cart = addProduct(cart, products, "id2");
cart = addProduct(cart, products, "id2");
cart = addProduct(cart, products, "id2");
cart = addProduct(cart, products, "id3");
cart = removeProduct(cart, "id1");
cart = removeProduct(cart, "id2");
showFunds(funds);
showStocks(products);
showCart(cart);
showTotal(cart);
const voucherCode = "blouses";
showDiscount(cart, vouchers, voucherCode);
const total = totalAmountWithDiscount(cart, vouchers, voucherCode);
const result = pay(funds, cart, products, vouchers, voucherCode);
funds = result[0];
cart = result[1];
products = result[2];
const giftCode = result[3];
if (giftCode) {
  console.log(
    `You received a gift code "${giftCode}" because your order was ${total}`
  );
}
showFunds(funds);
showStocks(products);
showCart(cart);
