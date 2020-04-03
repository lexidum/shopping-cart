function showStocks(products) {
  console.log("Stocks are: ");
  console.log("----------");
  Object.values(products).forEach(x => {
    console.log("-", x.name, "x", x.stock);
  });
  console.log("----------");
}
module.exports = showStocks;
