import Router from "express";
import controller from "./controller.js";

const router = new Router();

// show all exercises
router.get("/workouts", async (_, res) => {
  console.log("in the get route");
  try {
    const workouts = await controller.index();
    console.log(workouts);
    res.json(workouts);
  } catch (err) {
    console.log(err);
  }
});

// create new workout
router.post("/workouts", async (req, res) => {
  try {
    const newWorkout = await controller.create(req.body);
    res.status(201).json(newWorkout);
  } catch (err) {
    console.log(err);
  }
});

// update workout
router.put("/workouts/:id", async (req, res) => {
  try {
    const updateWorkout = await controller.add(req.body);
    res.status(200).json(updateWorkout);
  } catch (err) {
    console.log(err);
  }
});

router.post("/workouts", async (req, res) => {
  try {
    const addExercise = await controller.create(req.body);
    res.status(201).json(addExercise);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(err);
  }
});

router.get("/workouts/range", async (_, res) => {
  try {
    const workouts = await controller.index();
    res.json(workouts);
  } catch (err) {
    console.log(err);
  }
});

// delete workouts

export default router;
