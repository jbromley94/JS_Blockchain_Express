const {Transaction, codeCoin} = require("../blockchain.js")

/**
 * add new tran to bC.
 * @param {string} fromAddress
 * @param {string} toAddress
 * @param {int} amount
 */

const addTransaction = (req, res) => {
  codeCoin.createTransaction(
    new Transaction(req.body.fromAddress, req.body.toAddress, req.body.amount)
  )
  res.send("Transaction added to pending transactions.");
};

module.exports= {addTransaction}