var express = require('express');
var router = express.Router();

/*
 * GET task.
 */
router.get('/task', function(req, res) {
    var db = req.db;
    var collection = db.get('task');

    collection.find({aufgabennummer:"1"},{_id: false},function(e,docs){
        res.json(docs);
    });
});
router.get('/task/:id', function(req, res) {
    console.log(req.params)
    // console.log(id)
    console.log('HALLO SERVER REQUEST')
    // console.log(req)
    console.log(req.params.id)
    var db = req.db;
    var collection = db.get('task');

    collection.find({aufgabennummer:req.params.id},{_id: false},function(e,docs){
        res.json(docs);
    });
});
module.exports = router;