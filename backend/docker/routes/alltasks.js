var express = require('express');
var router = express.Router();

/*
 * GET task.
 */

router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('alltasks');

    collection.find({},{_id: false},function(e,docs){
        res.json(docs);
    });
});


module.exports = router;