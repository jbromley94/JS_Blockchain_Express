const mineRouter = require("express").Router();
const {
  mine
} = require("../controllers/mine");

mineRouter.route("/")
  .post(mine);


module.exports = mineRouter;