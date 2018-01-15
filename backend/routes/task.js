var express = require('express');
var router = express.Router();

/*
 * GET task.
 */
var re = new RegExp('/\w*/');
router.get('/task', function(req, res) {
    var db = req.db;
    var collection = db.get('task');

    collection.find({aufgabennummer:"1.0"},{_id: false},function(e,docs){
        res.json(docs);
    });
});
router.get('/task1', function(req, res) {
    var db = req.db;
    var collection = db.get('task');

    collection.find({aufgabennummer:"1"},{_id: false},function(e,docs){
        res.json(docs);
    });
});
router.get('/task2', function(req, res) {
    var db = req.db;
    var collection = db.get('task');

    collection.find({aufgabennummer:"2"},{_id: false},function(e,docs){
        res.json(docs);
    });
});
router.get('/task3', function(req, res) {
    var db = req.db;
    var collection = db.get('task');

    collection.find({aufgabennummer:"3"},{_id: false},function(e,docs){
        res.json(docs);
    });
});
router.get('/task4', function(req, res) {
    var db = req.db;
    var collection = db.get('task');

    collection.find({aufgabennummer:"4"},{_id: false},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;