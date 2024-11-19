import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import userRoutes from './routes/userRoute';
import cors from 'cors';
import routes from './routes';


dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();
const httpServer = createServer(app);
export const io = new SocketIOServer(httpServer);

export const io = new SocketIOServer(httpServer);


mongoose
  .connect(process.env.DB_URL!)
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((err) => console.error('Error conectando a MongoDB', err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);
app.use(routes);
app.get('/', (req,res)=>{
    res.json({message: "App is working fine"});
})
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

io.on('connection',(socket) => {
  console.log('Client connected');

  //socket.on('joinRoom',(roomId) => {
  //  socket.join('room-'+roomId);
  //})  

  socket.on('sendNewMessage',(data) => {
    console.log('New message: ', data);

    socket.to('room-'+data.room).emit('message recieved', data)
  })
})



