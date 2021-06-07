const express = require("express");
const task_api = require("../../api/controller/TaskController");
const router = express.Router();
router.get('/', task_api.get_task);
router.post('/submit', task_api.submit);

module.exports = router;