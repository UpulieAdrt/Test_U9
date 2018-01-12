let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

    ddb.get({
        TableName: 'ddb_test1',
        Key: { Id: '2', class: 'class1' }
    }, 
    
    function (err, data) {
        if (err) {
            //handle error
            console.log("No data to retrieve");
        } else {
            //your logic goes here
            console.log("success");
            var dataset = ddb.get();
            console.log(dataset);

        }
    });



}