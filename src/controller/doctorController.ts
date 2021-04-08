import { isEmpty } from "class-validator";
import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { Doctor } from "../entity/doctor";

export class DoctorController {
  static searchDoctor = async (req: Request, res: Response) => {
    const search = req.query.query || "";
    const take = +req.query.take || 3;
    const skip = +req.query.skip || 0;

    const [doctors, total] = await getRepository(Doctor).findAndCount({
      select: ["id", "name", "photo"],
      where: {
        name: Like(`%${search}%`),
      },
      skip: skip,
      take: take,
    });
    const result = {
      count: total,
      status: 200,
      data: doctors,
    };
    res.status(200).send(result);
  };

  static detailDoctor = async (req: Request, res: Response) => {
    const doctorId: string = req.query.doctorId.toString();

    if (isEmpty(doctorId)) {
      res.status(401).send({
        status: 401,
        message: "doctorId can't be null",
      });
    }

    const doctor = await getRepository(Doctor).findOne({
      where: {
        id: doctorId,
      },
    });

    if (isEmpty(doctor)) {
      res.status(401).send({
        status: 401,
        message: "Not Found",
      });
    }

    res.status(200).send({ status: 200, data: doctor });
  };
}
