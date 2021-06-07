const express = require("express");
const task_api = require("../../api/controller/TaskController");
const router = express.Router();
router.get('/task', task_api.get_task);

module.exports = router;