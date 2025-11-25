import express from "express";
import routes from "./routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

console.log("CORS allowed origin:", FRONTEND_URL);

app.use((req, res, next) => {
  console.log("DEBUG:", req.method, req.url);
  next();
});


app.use(cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// Handle OPTIONS (preflight) for ALL routes
app.options("*", cors());

app.use(express.json());
app.use("", routes);

export default app;
