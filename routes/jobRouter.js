import express from "express";
import {deleteJob, getAllJobs, getmyJobs, postJob, updateJob} from '../controllers/jobController.js'
import {isAuthorised} from '../middleware/auth.js';
const router=express.Router();

router.get("/getall",getAllJobs);
router.post("/post",isAuthorised,postJob);
router.get("/getmyjobs",isAuthorised,getmyJobs);
router.put("/update/:id",isAuthorised,updateJob);
router.delete("/delete/:id",isAuthorised,deleteJob)
export default router;