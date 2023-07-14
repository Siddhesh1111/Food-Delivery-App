const mongoose = require('mongoose');
async function mongoDB() {
    try {
        const conn = await mongoose.connect('mongodb+srv://siddhesh:siddhesh@cluster0.ulb71ew.mongodb.net/gofoodmern?retryWrites=true&w=majority', {useNewUrlParser: true});
        if(conn){
            console.log("MongoDB connected");
        }
    } catch (err) {
        console.log(err);
    }
    
}

module.exports = mongoDB;
