import './env.js';
import 'colors';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/error.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Config DotEnv

// Connect MongoDB
connectDB();

const app = express();
// Port
const port = process.env.PORT || 5000;

// Bypass cors
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
  9;
}

app.use(express.json());

// Routes

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

// Log Server Connection
app.listen(port, () =>
  console.log(`Server running on port: ${port}`.yellow.bold)
);
