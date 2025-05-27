import express from "express";
import dotenv from 'dotenv'; 
import users from './routes/users.js'
import cors from 'cors';
const app=express();

app.use(cors());
app.use(express.json());

dotenv.config(); 


const usersRoute = users; 

app.use(express.json()); 
app.use('/users', usersRoute);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
