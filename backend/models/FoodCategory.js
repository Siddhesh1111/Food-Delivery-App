
const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodCategorySchema = new Schema({
    CategoryName: String,
  });

module.exports = mongoose.model('FoodCategory', foodCategorySchema);