import client from "./loader.js";

const workoutsConnection = client.db("fitnessdb").collection("workouts")

export default {
    index() {
        return workoutsConnection.find().toArray();
    },
    create(newWorkout) {
        return workoutsConnection.insertOne(newWorkout);
    },
    cardioDuration() {
        return workoutsConnection.find({"exercises": {type: "cardio", duration: {$gt: 1}}})
    },
    resistanceWeight() {
        return workoutsConnection.aggregate([
            { $match: {type: "resistance "}},
            { $group: { duration: "20", total: { $sum: "$amount"}}}
        ])
    },
    findCardio(){
        return workoutsConnection.find({"exercises": {type: "cardio"}})
    }
}