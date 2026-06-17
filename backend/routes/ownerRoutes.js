const express = require("express");

const router = express.Router();

const {
  getOwnerDashboard,
} = require("../controllers/ownerController");

router.get("/:ownerId", getOwnerDashboard);

module.exports = router;