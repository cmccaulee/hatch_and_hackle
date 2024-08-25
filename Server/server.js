import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import flyRoutes from './routes/fly.routes.js';
import UserRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json(), cors({ "credentials": true, "origin": "http://localhost:5173" }));
dbConnect();
app.use('/api', UserRouter);
app.use('/api/flies', flyRoutes);

// Error Normalization
// Routes not found in App
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.statusCode = 404;
    err.name = "Not Found";
    next(err)
})
// All other errors
app.use((err, req, res, next) => {
    err.name === "ValidationError" ? err.statusCode = 400 : null;
    console.log(err.errors);
    // Normalize Error
    const normalizedError = {
        statusCode: err.statusCode || 500,
        message: err.message || "Internal Server Error",
        name: err.name || "Internal Server Error",
        validationErrors: extractValidationErrors(err)
    }
    // Return the normalized error
    res.status(normalizedError.statusCode).json(normalizedError);
})

// Extract Validation Errors
function extractValidationErrors(err) {
    const validationErrors = {};
    if (err.name === "ValidationError") {
        for (const field in err.errors) {
            const errorMessage = err.errors[field].message;
            validationErrors[field] = errorMessage;
        }
    }
    return validationErrors;
}

// Start the server
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);