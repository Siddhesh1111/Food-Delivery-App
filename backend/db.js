const mongoose = require('mongoose');
async function mongoDB() {
    await mongoose.connect('mongodb+srv://siddhesh:siddhesh@cluster0.ulb71ew.mongodb.net/gofoodmern?retryWrites=true&w=majority');
}

module.exports = mongoDB;
