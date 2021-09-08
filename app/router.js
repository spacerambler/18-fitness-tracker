import Router from "express";
import controller from "./controller.js"

const router = new Router();

router.get("/workouts", async (_,res)=>{
    try {
        const workouts = await controller.index();
    res.json(workouts);
    } catch (err) {console.log(err);}
    

})

export default router;
