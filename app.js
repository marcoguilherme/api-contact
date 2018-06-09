import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

let app = express();

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb')

//bodyParser configuration
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

routes(app);

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('server running')
})