import client from "./loader.js";

// need to get the workout model in here

const workoutsConnection = client.db("fitnessdb").collection("workouts");

// update index to aggregate for duration
// need an update method that passes in id and exercise
// need a method that orders elements by most recent and only shows the first 7

export default {
  index() {
    return workoutsConnection.find().toArray();
  },
  create() {
    const date = new Date();
    return workoutsConnection.insertOne({ day: date, exercises: [] });
  },
  add() {
    return workoutsConnection.insertMany([{}]);
  },
};
