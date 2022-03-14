const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  product: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  available: {
    type: Object,
    require: true,
    available_state: {
        type: Boolean,
        require: true,
      },
    stock: {
        type: Number,
        require: true,
      },
  },
});

module.exports = mongoose.model('ProductCollection', productSchema)