const db = require("./db");
const auth = require("./user/auth");
const startShoppingSession = require("./user/startShoppingSession");
const user = process.argv[2];
const pass = process.argv[3];
const session = auth(db, user, pass);
if (session.error) {
  console.log(session.message);
} else {
  console.log(`Welcome ${session.data.name}!`);
  console.log(
    `Your shopping session started at ${new Date(session.startedAt)}`
  );
  startShoppingSession(session);
}
