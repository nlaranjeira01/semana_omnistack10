const mongoose = require("mongoose");

const PointSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    rquired: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

module.exports = PointSchema;
