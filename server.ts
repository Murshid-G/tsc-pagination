import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { app } from './app';
dotenv.config({path :'./config/config.env'})
// const DB = process.env.MONGO_URI
// console.log(process.env)
mongoose.connect('mongodb://localhost:27017/natours',
    { 
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex:true
     }).then(()=>{console.log('Database connected...')})

const port = process.env.PORT || 5000;
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );