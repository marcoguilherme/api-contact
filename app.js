import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import jsonwebtoken from 'jsonwebtoken';
import User from './src/models/userModel';


let app = express();

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb')

//bodyParser configuration
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

//JWT Setup
app.use((req, res, next) => {
    if(req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'JWT'){
            jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
                if(err) req.user = undefined;
                req.user = decode;
                next();
            })
        }else{
            req.user = undefined;
            next();
        }
});

routes(app);

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('server running')
})