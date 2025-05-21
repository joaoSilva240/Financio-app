import express from "express";
const app = express();
import dotenv from 'dotenv'; 
import users from './routes/users.js'

dotenv.config(); 


const usersRoute = users; 

app.use(express.json()); 
app.use('/users', usersRoute);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
