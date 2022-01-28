const mongoose = require('mongoose');
const FruitSchema = new mongoose.Schema({
  name: String,
  color: String,
  price: Number,
  quantity: Number,
});

module.exports =  mongoose.model('Fruit', FruitSchema);