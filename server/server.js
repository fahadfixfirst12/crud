import express from "express";
import userRoute from "./routes/userRoute";
import connectDB from "./config/connectionDB";

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: 'false' }));
app.use(express.json());

connectDB('mongodb:/ / 127.0.0.0: 21070');

app.use('/', userRoute);

app.listen(PORT, () => console.log(`Server start ${PORT}`));

