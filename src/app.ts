import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import route from './routes/frame';

const app = express();
app.use(express.json());
app.use(errorHandler);
app.use(route);

export default app;