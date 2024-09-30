import app from "./src/main.js";
import dotenv from 'dotenv';

const ENVIRONMENT = process.env.ENVIRONMENT;
dotenv.config({ path: `./.env.${ENVIRONMENT}` });
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running ${ENVIRONMENT} on http://localhost:${port}`);
});

