const totalAmount = require("./totalAmount");
function pay(funds, cart, products) {
  const amount = totalAmount(cart);
  if (funds < amount) {
    throw new Error("Insufficient funds!");
  } else {
    Object.values(products).forEach(x => {
      const product = cart.find(y => y.id === x.id);
      if (product) {
        x.stock -= product.quantity;
      }
    });
    cart = [];
    funds -= amount;
  }
  return [funds, cart, products];
}
module.exports = pay;
