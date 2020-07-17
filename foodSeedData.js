const mongoose = require("./dbs/connection");
const db = mongoose.connection;
const Food = require("./models/Food");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  await Food.deleteMany({});

  const foods = [
    {
      name: "apple",
      calories: 125,
      Servings: 1,
      totalFat: 17,
      carbs: 125,
      protein: 2,
      cholesterol: 51,
      sodium: 331,
      potassium: 147,
      Link: "apple.com",
    },
    {
      name: "Garlic Sesame Broccoli Rabe with Panko Crusted Chicken",
      calories: 197,
      Servings: 8,
      totalFat: 12,
      carbs: 10,
      protein: 13,
      cholesterol: 72,
      sodium: 271,
      potassium: 270,
      Link:
        "https://www.edamam.com/recipe/garlic-sesame-broccoli-rabe-with-panko-crusted-chicken-a9d71387365bea12e55269a989b75ab6/most+searched",
    },
    {
      name: "Italian Stuffed Chicken",
      calories: 611,
      Servings: 4,
      totalFat: 30,
      carbs: 7,
      protein: 75,
      cholesterol: 250,
      sodium: 455,
      potassium: 0,
      Link:
        "https://www.edamam.com/recipe/italian-stuffed-chicken-d2a222524abc1c65389e31514cee6e73/most+searched",
    },
    {
      name: "Butterscotch Pudding",
      calories: 217,
      Servings: 8,
      totalFat: 13,
      carbs: 21,
      protein: 3,
      cholesterol: 111,
      sodium: 230,
      potassium: 141,
      Link:
        "https://www.edamam.com/recipe/butterscotch-pudding-searching-for-the-perfect-recipe-6fdf05550432530fda9a218e66d7aaf4/most+searched",
    },
    {
      name: "Red Lobster Biscuits",
      calories: 195,
      Servings: 12,
      totalFat: 11,
      carbs: 21,
      protein: 4,
      cholesterol: 23,
      sodium: 244,
      potassium: 62,
      Link:
        "https://www.edamam.com/recipe/red-lobster-s-cheddar-bay-biscuits-4395874613d06a1028d15a37a5ac324a/most+searched",
    },
    {
      name: "Baked Mac and Cheese",
      calories: 284,
      Servings: 12,
      totalFat: 17,
      carbs: 17,
      protein: 15,
      cholesterol: 51,
      sodium: 331,
      potassium: 147,
      Link:
        "https://www.edamam.com/recipe/easiest-baked-mac-and-cheese-9517d8e497e6b98127ad4ef917338be2/most+searched",
    },
  ];

  await Food.insertMany(foods);
  console.log("Created some food items!");
};
const run = async () => {
  await main();
  db.close();
};

run();
