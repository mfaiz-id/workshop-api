const express = require("express");
const task_api = require("../../api/controller/TaskController");
const router = express.Router();
router.get('/', task_api.get_task);
router.get('/detail', task_api.get_detail);
router.post('/submit', task_api.submit);

module.exports = router;