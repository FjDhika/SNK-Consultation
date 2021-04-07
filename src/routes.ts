import { Router, Response, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  res.status(200).send("SNK Consultation API")
);

export default router;
