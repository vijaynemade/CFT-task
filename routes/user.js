const express = require("express");
const userController = require("../controller/userController");
const upload = require("../imageCode/upload");

var router = express.Router();

router.post("/userInfo", upload(), userController.userInfo);

router.post("/getDataById", userController.getDataById);

router.post("/updateData", upload(), userController.updateData);

router.post("/getData", userController.getData);

router.post("/deleteData", userController.deleteData);

module.exports = router;