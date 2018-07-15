const node = require("./nodes")
console.log(node)
import rp from 'request-promise'

const mine = (req, res) => {
  codeCoin.minePendingTransactions(req.body.rewardAddress);

  //notify other blockcahins a new block has been added

  let promiseArray = [];

  codeCoin.nodes.map(node => {
    let promise = rp.get({
      uri = `http://localhost:${node}/events/blockchain/update`,
      json: true
    });
    promiseArray.push(promise)
  })
  await Promise.all(promiseArray)
  res.send("Mining finished. Reward Transaction created.");
};

module.exports = {
  mine
}