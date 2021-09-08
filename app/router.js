import Router from "express";
import controller from "./controller.js"

const router = new Router();

router.get("/workouts", async (_,res)=>{
    try {
        const workouts = await controller.index();
    res.json(workouts);
    } catch (err) {console.log(err);}
})

router.post("/workouts", async (req, res)=> {
    try {
        const newWorkout = await controller.create(req.body);
        res.status(201).json(newWorkout);
    } catch(error) {
        res.status(400).json(error.message);
        console.log(err);
    }
})

export default router;
