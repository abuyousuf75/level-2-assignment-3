import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import router from './app/config/route';
import globalErrorHandeler from './app/config/middleWares/globalErrorhandeler';



const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// application route

app.use('/api', router);
app.use(globalErrorHandeler)

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;
