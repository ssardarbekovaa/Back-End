module.exports = {
    /*url: 'mongodb://localhost:3000/untitled4'*/
    url: 'mongodb+srv://itomohito:Mongodbaru650542@cluster0.xytus.mongodb.net/hotspot?retryWrites=true&w=majority',
}

/*const { MongoClient } = require("mongodb");

Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://itomohito:Mongodbaru650542@cluster0.xytus.mongodb.net/hotspot?retryWrites=true&w=majority";*/

/*const client = new MongoClient(uri);*/

/*async function run() {
    try {
        await client.connect();

        const database = client.db("hotspot");
        const collection = database.collection("clients");

        Query for a movie that has the title 'The Room'
        const query = { name: "aruzhan" };

        const options = {
            // sort matched documents in descending order by rating
            sort: { "imdb.rating": -1 },
            // Include only the `title` and `imdb` fields in the returned document
            projection: { _id: 0, title: 1, imdb: 1 },
        };

        const res = await collection.findOne(query);

        // since this method returns the matched document, not a cursor, print it directly
        console.log(res);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);*/
