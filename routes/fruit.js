const express = require("express");
const fruit = require("../models/fruit");
const router = express.Router();

// Get all fruits
router.get("/", async (req, res) => {
  try {
    const fruits = await fruit.find();
    return res.status(200).json({
      message: "Fruits retrieved successfully",
      data: fruits,
    })}
  catch (err) {
    return res.status(500).json({
      message: "Failed to retrieve fruits",
      error: err,
    });
  }
})

router.post("/", async (req, res) => {
  try{
    const { name, color, price, quantity } = req.body;
    const fruit = await fruit.create({
      name,
      color,
      price,
      quantity,
    });
    return res.status(200).json({
      message: "Fruit created successfully",
      data: fruit,
    })
  } catch (err) {
    return res.status(500).json({
      message: "Failed to create fruit",
      error: err,
    });
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fruit = await fruit.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Fruit deleted successfully",
      data: fruit,
    })
  } catch (err) {
    return res.status(500).json({
      message: "Failed to delete fruit",
      error: err,
    });
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, color, price, quantity } = req.body;
    const fruit = await fruit.findByIdAndUpdate(id, {
      name,
      color,
      price,
      quantity,
    });
    return res.status(200).json({
      message: "Fruit updated successfully",
      data: fruit,
    })
  } catch (err) {
    return res.status(500).json({
      message: "Failed to update fruit",
      error: err,
    });
  }
})

module.exports = router