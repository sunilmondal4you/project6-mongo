/**
 * Created by abc on 24/05/2016.
 */
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/virat';
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', err);

        // Get the documents collection
        var collection = db.collection('users');

        //Create some users
        var user1 = {name: 'Sunil', age: 26, roles: ['admin', 'moderator', 'user']};
        var user2 = {name: 'Vipin', age: 25, roles: ['user','admin']};
        var user3 = {name: 'Vivek', age: 32, roles: ['super-admin', 'admin', 'moderator', 'user']};

        // Insert some users
        collection.insert([user1, user2, user3], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
            }

        db.close();
    });
}
});