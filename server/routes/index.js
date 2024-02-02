const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to mern app" });
});

router.use("/users", require("./users.route"));

module.exports = router;
