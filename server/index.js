const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.router");
const usersRouter = require("./routes/users.router");
const menusRouter = require("./routes/menus.router");
const reservationsRouter = require("./routes/reservations.router");
const errorHandlerMiddleware = require("./utils/errorHandler");

dotenv.config();
const app = express();

const listen = async () => {
  await connectToMongodb();
  app.listen(process.env.PORT, () => {
    console.log("Backend listening on port "+process.env.PORT)
  })  
}

mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));
mongoose.connection.on("connected", () => console.log("MongoDB connected"));

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : true}))


// routes
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/menus", menusRouter);
app.use("/api/reservations", reservationsRouter);


const connectToMongodb = () => {
  return mongoose.connect(process.env.MONGODBURL).then(
    () => console.log("Mongodb connected"),
    err => console.log("Mongodb error: " + err)
  )
}


app.get("/", (req, res) => res.send("Welcome to Bienvenue API. If you catches any bug, please report them to richardhan82@gmail.com"))

// middlewares
app.use(errorHandlerMiddleware);

listen();