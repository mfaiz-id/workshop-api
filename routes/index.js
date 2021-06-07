var express = require('express');
var router = express.Router();


const task = require("./modules/taskRoutes");


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/task", task);


module.exports = router;
