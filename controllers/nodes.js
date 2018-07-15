const node = (req, res, next) => {
  let PORT = req.body.PORT;
  res.status(201).send({
    msg: `PORT :${PORT} has been created!`
  })
}

module.exports = {
  node
}