const apiRouter = require("express").Router();

const transRouter = require("./transRouter")
const nodesRouter = require("./nodesRouter")
// const mineRouter = require("./mineRouter")

// apiRouter.use("/mine", mineRouter);
apiRouter.use("/nodes", nodesRouter);
apiRouter.use("/trans", transRouter);

module.exports = apiRouter;