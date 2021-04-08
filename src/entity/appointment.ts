import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
  JoinTable,
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
  doctors!: Doctor[];

  @Column()
  @IsNotEmpty()
  start!: Date;

  @Column()
  @IsNotEmpty()
  end!: Date;
}
