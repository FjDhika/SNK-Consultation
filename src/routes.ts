import { Router, Response, Request } from "express";
import { DoctorController } from "./controller/doctorController";
import { Doctor } from "./entity/doctor";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  res.status(200).send("SNK Consultation API")
);

router.get("/search", DoctorController.searchDoctor);

router.get("/doctor", DoctorController.detailDoctor);
export default router;
