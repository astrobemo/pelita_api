import dotenv from 'dotenv';
import app from "./src/main.js";

dotenv.config({ path: './env.development.local' });
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

