import 'dotenv/config';
import express from 'express';
import connectDB from './db/connect.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: ["*", "http://localhost:5173"], // Update this with the allowed origins or set it to a specific origin
    methods: "GET, POST, PUT, DELETE", // Update with the allowed HTTP methods
    allowedHeaders: "Content-Type, Authorization", // Update with the allowed headers
    credentials: true, // Enable credentials if you're using cookies or other authentication methods
  };
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






//ROUTES
import apiRoutes from "./routes/index.js";
app.use("/api", apiRoutes);
// const payPalRoutes = require("./routes/paypal");
// app.use('/', payPalRoutes)

app.use('/', (req, res) => {
    res.json("E-commerce Server")
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=> {
            console.log(`Server listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()