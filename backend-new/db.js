 const mongoose = require('mongoose');
 //const mongoURI = "mongodb+srv://thejasurendran:5hKy1nnIkhOEFJQ2@cluster1.sbjmanc.mongodb.net/FLAMINGO?retryWrites=true&w=majority&appName=Cluster1"
//  const mongoURI = "mongodb://thejasurendran:5hKy1nnIkhOEFJQ2@ac-atz13vz-shard-00-00.sbjmanc.mongodb.net:27017,ac-atz13vz-shard-00-01.sbjmanc.mongodb.net:27017,ac-atz13vz-shard-00-02.sbjmanc.mongodb.net:27017/?ssl=true"
const mongoURI = "mongodb+srv://thejasurendran:5hKy1nnIkhOEFJQ2@cluster1.sbjmanc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
 const mongoDB=async() =>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true},async(err,result)=>{
        if(err) console.log("---",err)
        else{
        console.log("connected");
        const fetched_data =await mongoose.connection.db.collection("product_items");
        fetched_data.find({}).toArray( function(err,data){
            if(err) console.log(err);
            else console.log(data);
        })
    }
    });
 
 
 }
 module.exports =mongoDB


// // const mongoDbClient = require("mongodb").MongoClient
 
// const mongoURI = 'mongodb://127.0.0.1:27017/react-flamingo' // Customer change url to your db you created in atlas
// // mongodb://localhost:27017
// mongoose.connect(mongoURI).then(()=>{
//     console.log("DB Connected");
// })
// .catch((err)=>{
//     console.log("DB Error"+err);
// })

// module.exports = mongoose



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://thejasurendran:5hKy1nnIkhOEFJQ2@cluster1.sbjmanc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
