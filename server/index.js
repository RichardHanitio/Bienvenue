const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.router");
const usersRouter = require("./routes/users.router");
const menusRouter = require("./routes/menus.router");
const paymentsRouter = require("./routes/payments.router");
const reservationsRouter = require("./routes/reservations.router");
const errorHandlerMiddleware = require("./utils/errorHandler");
const Mailgun = require("mailgun.js");
const formData = require("form-data");

dotenv.config();
const app = express();
const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username : "Bienvenue",
  key : process.env.MAILGUN_API_KEY,
});

const listen = async () => {
  await connectToMongodb();
  app.listen(process.env.PORT, () => {
    console.log("Backend listening on port "+process.env.PORT)
  })  
}

mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));
mongoose.connection.on("connected", () => console.log("MongoDB connected"));

let whiteList = ["http://localhost:3000", "https://bienvenue-theta.vercel.app"];

// middlewares
app.use(helmet());
app.use(cors({
  origin : whiteList,
  credentials : true,
  // allowedHeaders: ["Content-Type", "Authorization"],
  allowedHeaders : '*'
}));
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser());


// routes
// app.use("/api/auth", authRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/menus", menusRouter);
// app.use("/api/reservations", reservationsRouter);
// app.use("/api/payments", paymentsRouter)

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/menus", menusRouter);
app.use("/reservations", reservationsRouter);
app.use("/payments", paymentsRouter)

app.get("/send-email", async(req, res) => {
  const data = {
    from : "Bienvenue Support <support@bienvenue.id>",
    to : "richardhan82@gmail.com",
    subject : "Welcome to Bienvenue",
    text : "This is just a simple email"
  }
  const resp = await client.messages.create(process.env.MAILGUN_DOMAIN, data)
  console.log(resp)
})

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