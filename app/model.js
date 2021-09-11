// // import mongoose from "mongoose";

// // // eslint-disable-next-line prefer-destructuring
// // const Schema = mongoose.Schema;

// // const PlanSchema = new Schema({
// //     exercises: [{
// //         type: String,
// //         name: String, 
// //         duration: Number,
// //         weight: Number,
// //         reps: Number,
// //         sets: Number,
// //         distance: Number
// //     }],
// //     date: Date
// // });

// // const Plan = mongoose.model("Plan", PlanSchema);

// // module.exports = Plan;

// const validate = (state) => {};

// const withNumbers = (state) => ({});

// export default {
//     addExercise(workout, newExercise) {
//         const errors = validate(newExercise);
//         if (errors.length) {
//             // need to add in more here... go through each key and add validation 

//         }
//         return {
//             ...workout,
//             exercises: [
//                 ...workout.exercises,
//                 {...newExercises, ...withNumbers(newExercise) }
//             ]
//         }
//     }
// }