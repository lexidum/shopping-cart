const totalAmountWithDiscount = require("./totalAmountWithDiscount");
function pay(funds, cart, products, vouchers, voucherCode) {
  let amount = totalAmountWithDiscount(cart, vouchers, voucherCode);
  if (funds < amount) {
    throw new Error("Insufficient funds!");
  } else {
    Object.values(products).forEach((x) => {
      const product = cart.find((y) => y.id === x.id);
      if (product) {
        x.stock -= product.quantity;
      }
    });
    cart = [];
    funds -= amount;
  }
  let giftCode;
  if (amount > 100) {
    giftCode = "Unique";
  }
  return [funds, cart, products, giftCode];
}
module.exports = pay;
