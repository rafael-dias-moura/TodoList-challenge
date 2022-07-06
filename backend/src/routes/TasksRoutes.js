const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.post("/", async (req, res) => {
    try {
        const data = await new Task(req.body).save();
        res.send(data);
        } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await Task.find({}, 'task completed ');
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => { 
   try {    
   const data = await Task.findByIdAndUpdate((req.params.id),
            {$set: req.body},{new:true});
    res.send(data);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;