var express = require('express');
var router = express.Router();

/*
 * GET task.
 */
router.get('/task', function(req, res) {
    var db = req.db;
    var collection = db.get('task');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;