const totalAmount = require("./totalAmount");
function showTotal(cart) {
  console.log("Your total is:", totalAmount(cart));
}
module.exports = showTotal;
