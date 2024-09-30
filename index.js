import dotenv from 'dotenv';
import app from "./src/main.js";
import cors from "cors";
import { expressjwt } from "express-jwt";

const ENVIRONMENT = process.env.ENVIRONMENT;
dotenv.config({ path: `./.env.${ENVIRONMENT}` });
const port = process.env.PORT || 3000;
const secret = process.env.TOKEN_SECRET;
console.log('secret', secret);

const allowedOrigins = ['http://202.138.247.174'];

const corsOptions = {
    origin: function (origin, callback) {
        console.log('origin', origin);
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));


app.use(expressjwt({
    secret: secret,
    algorithms: ['HS256']
}).unless({
    path:['/hello']
}));

app.listen(port, () => {
    console.log(`Server is running ${ENVIRONMENT} on http://localhost:${port}`);
});

