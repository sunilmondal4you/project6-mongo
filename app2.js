/**
 * Created by abc on 24/05/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url='mongodb://localhost:27017/skm';

var  user={"detail":{
        "firstname":"Sunil",
        "lastname":"Mondal",
        "email":"sunilmondal4you@gmail.com",
        "mobile":[72222222,44444444]
    },
    "city":"Mumbai",
    "reg id":"005"
};

var insertDocument=function(db,callback) {
    db.collection('sunilm').insertOne(user,function(err,result) {
        assert.equal(err,null);
        console.log("Inserted a document into the SKM collection.");
        callback;
    });
};

MongoClient.connect(url,function(err,db) {
    assert.equal(null,err);
    insertDocument(db,function () {
        db.close();
    });
});