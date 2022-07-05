/*=============================================
                    Imports
=============================================*/
// Packages
import express from 'express';
import cors from 'cors';
// Router routes
import calculateInterest from './routes/calculateInterest'
// Environment variables
import { 
    BACKEND_CONTAINER_PORT
} from './env'
/*=============================================
                    Environment
=============================================*/
const 
    app = express(),
    corsOptions = {
        origin: ['http://host.docker.internal:50000','http://localhost:3000'],
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
app.use(cors(corsOptions));
app.use(express.json());
/*=============================================
                    Routers
=============================================*/
app.use('/calculate-interest', calculateInterest);
/*=============================================
                    Expose
=============================================*/
app.listen(BACKEND_CONTAINER_PORT, () => {
    console.log(`Server is running on port: ${BACKEND_CONTAINER_PORT}`);
});
