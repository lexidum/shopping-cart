function totalAmount(products) {
  function fn(acc, x) {
    acc = acc + x.price * x.quantity;
    return acc;
  }
  return products.reduce(fn, 0);
}
module.exports = totalAmount;
