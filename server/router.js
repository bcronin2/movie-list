var router = require("express").Router();
var controller = require("./controller.js");

router.get("/", controller.get);
router.post("/", controller.post);
router.put("/", controller.put);

module.exports = router;
