import client from "./loader.js";

// Uses the db client from loader.js
const controller = {
    async index() {
        const workouts = await client.db("fitnessdb")
        .collection("workouts")
        .find()
        .toArray()
        return workouts;
    }
}

export default controller;