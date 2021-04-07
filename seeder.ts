import { getConnection } from "typeorm";
import { Doctor } from "./src/entity/doctor";

export const seed = async () => {
  await getConnection().createQueryBuilder().delete().from(Doctor).execute();
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Doctor)
    .values([
      {
        name: "Armin",
        description: "Doctor Armin desc",
        photo: "armin.jpg",
      },
      {
        name: "Mikasa Ackerman",
        description: "Doctor Mikasa Ackerman desc",
        photo: "mikasa.jpg",
      },
      {
        name: "Ymir",
        description: "Doctor Ymir desc",
        photo: "ymir.jpg",
      },
      {
        name: "Zeke Yeager",
        description: "Doctor Zeke Yeager desc",
        photo: "zeke.jpg",
      },
      {
        name: "Pieck Finger",
        description: "Doctor Pieck Finger desc",
        photo: "zeke.jpg",
      },
    ])
    .execute();
};
