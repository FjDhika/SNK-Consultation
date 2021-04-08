import { Router, Response, Request } from "express";
import { AppointmentController } from "./controller/appointmentController";
import { DoctorController } from "./controller/doctorController";
import { Doctor } from "./entity/doctor";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  res.status(200).send("SNK Consultation API")
);

router.get("/search", DoctorController.searchDoctor);

router.get("/doctor", DoctorController.detailDoctor);

router.post("/appointment", AppointmentController.createAppointment);
export default router;
