import express from "express";
import routes from "./routes.js";

// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import CORS middleware
import cors from "cors";

const app = express();

// Determine allowed frontend origin
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

//  Enable CORS so frontend can talk to backend
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use("", routes);

export default app;
