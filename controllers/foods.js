const express = require("express");
const router = express.Router();
const Food = require("../models/Food");
//const { json } = require("express");
const User = require("../models/User");

//all foods
router.get("/", (req, res) => {
  Food.find({}, (error, foods) => {
    if (error) console.log(error);
    else res.json(foods);
  });
});

//get logged
router.get("/logged", (req, res) => {
  Food.find({ isLogged: true }, (error, foods) => {
    if (error) console.log(error);
    else res.json(foods);
  });
});

//find by id
router.get("/:id", (req, res) => {
  Food.findById(req.params.id, (error, food) => {
    if (error) console.log(error);
    else res.json(food);
  });
});

//find food by name
router.get("/name/:name", (req, res) => {
  Food.findOne({ name: req.params.name }, (error, food) => {
    if (error) console.log(error);
    else res.json(food);
  });
});

//edit by id
router.put("/:id", (req, res) => {
  Food.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

//edit by name
router.put("/name/:name", (req, res) => {
  Food.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

//edit to true from false
router.put("/change/:id", (req, res) => {
  Food.findOneAndUpdate(
    { _id: req.params.id },
    { isLogged: true },
    { new: true },
    (error, song) => {
      if (error) console.log(error);
      else res.json(song);
    }
  );
});

//create a new food
router.post("/", (req, res) => {
  Food.create(req.body, (error, food) => {
    if (error) console.log(error);
    else res.json(food);
  });
});

//delete by id
router.delete("/:id", (req, res) => {
  Food.findByIdAndDelete(req.params.id, (error, food) => {
    if (error) console.log(error);
    else res.json(food);
  });
});

//delete by name
router.delete("/name/:name", (req, res) => {
  Food.remove({ name: req.params.name }, (error, food) => {
    if (error) console.log(error);
    else res.json(food);
  });
});

module.exports = router;
