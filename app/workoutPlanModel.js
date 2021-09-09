import mongoose from "mongoose";

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    exercises: [{
        type: String,
        name: String, 
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }],
    date: Date
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;