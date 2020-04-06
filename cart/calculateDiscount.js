function calculateDiscount(cart, vouchers, voucherCode) {
  let discountAmount = 0;
  if (vouchers[voucherCode]) {
    const voucher = vouchers[voucherCode];
    if (voucher.type === "total") {
      discountAmount = amount * voucher.discount;
    } else if (voucher.type === "product") {
      discountAmount = cart.reduce((acc, x) => {
        if (x.id === voucher.product) {
          const total = x.price * x.quantity;
          const discountForProduct = total * voucher.discount;
          acc += discountForProduct;
        }
        return acc;
      }, 0);
    }
  } else {
    console.log("Incorrect code!");
  }
  return discountAmount;
}
module.exports = calculateDiscount;
