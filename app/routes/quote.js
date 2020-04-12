var express = require('express');
var router = express.Router();
const { MongoClient } = require("mongodb");
const keys = require("../keys");

/* GET users listing. */
router.get('/', function(req, res, next){
  res.send('oh goody a quote');
});

router.post('/createQuote', async function(req, res, next) {
  const url = keys.url;
  const dbName = keys.dbName;
  const client = new MongoClient(url);
    try {
       await client.connect();
       console.log("Connected correctly to server");
       const db = client.db(dbName);

       // Use the collection "people"
       const col = db.collection("mbmbam-ipsum-quotes");

       // Construct a document                                                                                                                                                              
       let quoteDocument = {
           "text": req.body.text,
           "nsfw": req.body.nsfw,
           "show": req.body.show,
       }

       // Insert a single document, wait for promise so we can read it back
       const p = await col.insertOne(quoteDocument);
       // Find one document
       const myDoc = await col.findOne();
       // Print to the console
       console.log(myDoc);

      } catch (err) {
       console.log(err.stack);
   }

   finally {
      await client.close();
  }
});

module.exports = router;
