import express from "express";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import xss from "xss-clean";
import hpp from "hpp";
import cors from "cors";
import compress from "compression";
import morganMiddleware from "./logger/morganMiddleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morganMiddleware);
app.use(compress());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Prevent http param pollution
app.use(hpp());

// Enable cors
app.use(cors());

export default app;
