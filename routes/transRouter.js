

const transRouter = require("express").Router();
const {
  addTransaction
} = require("../controllers/transactions");

transRouter.route("/")
  .post(addTransaction);


module.exports = transRouter;