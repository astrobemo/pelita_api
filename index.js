import app from "./src/main.js";






app.listen(port, () => {
    console.log(`Server is running ${ENVIRONMENT} on http://localhost:${port}`);
});

