const { error } = require('console');
const mongoose = require('mongoose');
async function mongoDB() {
    await mongoose.connect('mongodb+srv://siddhesh:siddhesh@cluster0.ulb71ew.mongodb.net/gofoodmern?retryWrites=true&w=majority').then(async (res) => {
        console.log("Connected to MongoDB");
        const data= await mongoose.connection.db.collection("food_items").find({}).toArray();
        const categoryData = await mongoose.connection.db.collection("foodcategories").find({}).toArray();

        global.foodCategory = categoryData;
        global.food_items = data;
    }).catch((err)=> {
        console.log(err);
    })
}

module.exports = mongoDB;
