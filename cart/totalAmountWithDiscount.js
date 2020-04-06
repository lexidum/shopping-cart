const totalAmount = require("./totalAmount");
const calculateDiscount = require("./calculateDiscount");
function totalAmountWithDiscount(cart, vouchers, voucherCode) {
  const total = totalAmount(cart);
  const discount = calculateDiscount(cart, vouchers, voucherCode);
  return total - discount;
}
module.exports = totalAmountWithDiscount;
