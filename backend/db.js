const mongoose = require('mongoose');
async function mongoDB() {
    const conn = await mongoose.connect('mongodb+srv://siddhesh:siddhesh@cluster0.ulb71ew.mongodb.net/gofoodmern?retryWrites=true&w=majority');
}

module.exports = mongoDB;
