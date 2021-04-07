import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Doctor } from "./doctor";

@Entity()
@Unique(["id"])
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @ManyToMany(() => Doctor, (doctor) => doctor.appointments)
  doctor!: Doctor;

  @Column()
  @IsNotEmpty()
  start!: Date;

  @Column()
  @IsNotEmpty()
  end!: Date;
}
