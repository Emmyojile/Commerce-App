import 'dotenv/config';
import express from 'express';
import connectDB from './db/connect.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: ["*", "http://localhost:5173"], 
    methods: "GET, POST, PUT, DELETE", 
    allowedHeaders: "Content-Type, Authorization", 
    credentials: true,
  };
  app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTES
import apiRoutes from "./routes/index.js";
app.use("/api", apiRoutes);

import payPalRoutes from "./routes/paypal.js";
// app.use('/', payPalRoutes)

app.use('/', (req, res) => {
    res.json("E-commerce Server")
})

const start = async () => {
    try {
        // await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=> {
            console.log(`Server listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()