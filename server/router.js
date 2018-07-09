var router = require("express").Router();
var controller = require("./controller.js");

router.post("/", controller.post);
router.get("/", controller.get);
router.put("/", controller.put);
router.delete("/", controller.delete);

module.exports = router;
