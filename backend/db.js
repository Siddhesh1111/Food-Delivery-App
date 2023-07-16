const { error } = require('console');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { default: FoodCategory } = require('./models/FoodCategory');
const mongoURI = 'mongodb+srv://siddhesh:siddhesh@cluster0.ulb71ew.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>{
            console.log('Connected to MongoDB');
        }).catch((error)=> {
            console.log(error);
        });

        // const foodCategorySchema = new Schema({
        //     CategoryName: String,
        //   });
        
        // const FoodCategory = mongoose.model('FoodCategory', foodCategorySchema);

        // FoodCategory.find({}).then((res)=>{
        //     console.log(res);
        // }).catch((err) => {
        //     console.log(err);
        // });
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = mongoDB;
