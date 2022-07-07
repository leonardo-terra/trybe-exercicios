import express from 'express';
import 'express-async-errors';
import "dotenv/config"
import userController from './controller/user.controller'
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get('/users', userController.getUsers)

app.listen(PORT, () =>{
console.log('Ouvindo na porta', PORT);
});