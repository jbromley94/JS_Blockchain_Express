const nodesRouter = require("express").Router();
const {
  node
} = require("../controllers/nodes");

nodesRouter.route("/")
  .post(node);


module.exports = nodesRouter;