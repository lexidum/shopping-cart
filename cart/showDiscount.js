const calculateDiscount = require("./calculateDiscount");
function showDiscount(cart, vouchers, voucherCode) {
  const discount = calculateDiscount(cart, vouchers, voucherCode);
  if (discount) {
    console.log(`Applying voucher "${voucherCode}"`);
    console.log(`Your ${discount}RON discount was applied!`);
  }
}
module.exports = showDiscount;
