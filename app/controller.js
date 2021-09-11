import client from "./loader.js";

const workoutsConnection = client.db("fitnessdb").collection("workouts")

export default {
    index() {
        return workoutsConnection.find().toArray();
    },
    create(newWorkout) {
        return workoutsConnection.insertOne(newWorkout);
    }
}