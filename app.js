/**
 * Created by abc on 23/05/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/sunil';


var user={
    "address" : {
        "street" : "2 Avenue",
        "zipcode" : "10075",
        "building" : "1480",
        "coord" : [ -73.9557413, 40.7720266 ]
    },
    "name" : "Vella",
    "restaurant_id" : "41704620"
};

var insertDocument = function(db, callback) {
    db.collection('vipin').insertOne( user, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the vipin collection.");
        callback();
    });
};

var user2={
    "address" : {
        "street" : "B-301",
        "zipcode" : "410210",
        "building" : "Arham Arcade",
        "coord" : [ -73.95, 40.772 ]
    },
    "name" : "Sunil",
    "restaurant_id" : "005"
};

var insertDocument = function(db, callback) {
    db.collection('Sunil').find({"name" : "Sunil"}).toArray(function(err, result){
        assert.equal(err, null);
        console.log(result);
        callback();
    });
};

//Call the insertDocument function.

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});
