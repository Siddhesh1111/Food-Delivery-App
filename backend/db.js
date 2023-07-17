const { error } = require('console');
const mongoose = require('mongoose');
async function mongoDB() {
    await mongoose.connect('mongodb+srv://siddhesh:siddhesh@cluster0.ulb71ew.mongodb.net/gofoodmern?retryWrites=true&w=majority').then(async (res) => {
        console.log("Connected to MongoDB");
        const data= await mongoose.connection.db.collection("foodcategories").find({}).toArray();
        // console.log("Came here",data);
        // const result = data.findOne({"CategoryName": "Starter"});
        // data.find({}).toArray((err,data) => {
        //     if(err) console.log(err);
        //     else console.log(data);
        // });
        console.log("Here too");
    }).catch((err)=> {
        console.log(err);
    })
}

module.exports = mongoDB;
