import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

//importing routes
import carRoutes from "./routes/cars";
import driverRoutes from "./routes/drivers"
import userRoutes from "./routes/users";

//initialization
const app = express();

//midlewears
app.use(morgan("dev"));
app.use(json());
app.use(cors());

//routes
app.use('/api/cars/', carRoutes);
app.use('/api/drivers/', driverRoutes);
app.use('/api/user/', userRoutes);

export default app;