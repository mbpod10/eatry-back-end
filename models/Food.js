const mongoose = require("../dbs/connection");

const FoodSchema = new mongoose.Schema(
  {
    name: String,
    isLogged: { type: Boolean, default: false },
    calories: Number,
    Servings: Number,
    totalFat: Number,
    carbs: Number,
    protein: Number,
    cholesterol: Number,
    sodium: Number,
    potassium: Number,
    Link: String,
  },
  { timestamps: true }
);

const Song = mongoose.model("foods", FoodSchema);

module.exports = Song;
