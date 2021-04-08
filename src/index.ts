import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import { dbConfig } from "./config/database.config";
import router from "./routes";
import { seed } from "../seeder";

createConnection(dbConfig)
  .then(async (connection) => {
    // create express app
    const app = express();

    // await seed();

    // middlewares
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/", router);

    app.listen(process.env.HTTP_PORT, () => {
      console.log(
        `Express server has started on port ${process.env.HTTP_PORT}. Open http://localhost:${process.env.HTTP_PORT}`
      );
    });
  })
  .catch((error) => console.log(error));
