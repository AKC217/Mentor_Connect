import express from 'express';
import { loginMentor, appointmentsMentor, appointmentCancel, MentorList, changeAvailablity, appointmentComplete, MentorDashboard, MentorProfile, updateMentorProfile } from '../controllers/MentorController.js';
import authMentor from '../middleware/authMentor.js';
const MentorRouter = express.Router();

MentorRouter.post("/login", loginMentor)
MentorRouter.post("/cancel-appointment", authMentor, appointmentCancel)
MentorRouter.get("/appointments", authMentor, appointmentsMentor)
MentorRouter.get("/list", MentorList)
MentorRouter.post("/change-availability", authMentor, changeAvailablity)
MentorRouter.post("/complete-appointment", authMentor, appointmentComplete)
MentorRouter.get("/dashboard", authMentor, MentorDashboard)
MentorRouter.get("/profile", authMentor, MentorProfile)
MentorRouter.post("/update-profile", authMentor, updateMentorProfile)

export default MentorRouter;