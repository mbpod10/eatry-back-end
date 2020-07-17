const mongoose = require("../dbs/connection");

const FoodSchema = new mongoose.Schema(
  {
    name: String,
    calories: Number,
    Servings: Number,
    totalFat: Number,
    carbs: Number,
    protein: Number,
    cholesterol: Number,
    sodium: Number,
    potassium: Number,
    link: String,
  },
  { timestamps: true }
);

const Song = mongoose.model("foods", FoodSchema);

module.exports = Song;
