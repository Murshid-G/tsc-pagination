import express, {Request, Response } from 'express';
// import morgan from 'morgan';
const tourRouter = require('./routes/tourRouter.ts')
const app = express()
app.use(express.json()) 

app.use(express.urlencoded({ extended: true }));
// if(process.env.NODE_ENV === 'development'){
// app.use(morgan('dev'))
// }

 app.use('/api/v1/tours',tourRouter);
    
     
export {app};    