import { Request, Response } from "express";
import { getManager, getRepository } from "typeorm";
import { Appointment } from "../entity/appointment";
import { Doctor } from "../entity/doctor";

export class AppointmentController {
  static createAppointment = async (req: Request, res: Response) => {
    const doctorId: string = req.body.doctorId;
    const start: Date = new Date(req.body.start);

    // duration of the appointment is 1 hours
    const end: Date = new Date(req.body.start);
    end.setHours(end.getHours() + 1);

    const isExist = await getRepository(Appointment)
      .createQueryBuilder("app")
      .leftJoin("app.doctors", "doctor")
      .where("doctor.id = :id", { id: doctorId })
      .andWhere(
        "((start between :start and :end) OR (end between :start and :end))",
        { start: start, end: end }
      )
      .getMany();

    if (isExist.length > 0) {
      res.status(401).send({
        status: 401,
        message: "Appointment at this time already booked",
      });
      return;
    }

    const doctor = await getRepository(Doctor).findOne({
      where: { id: doctorId },
    });

    const apptmnt = new Appointment();
    apptmnt.start = start;
    apptmnt.end = end;
    await getManager().save(apptmnt);

    doctor.appointments = [apptmnt];
    await getManager().save(doctor);

    res.status(200).send({
      status: 200,
      data: true,
    });
  };
}
