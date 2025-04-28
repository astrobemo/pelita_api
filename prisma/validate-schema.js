import { execSync } from 'child_process';
import dotenv from 'dotenv';
import path from 'path';
import { env } from 'process';

const validateSchema = (envFile) => {
    try {
        dotenv.config({ path: path.resolve(__dirname, `../${envFile}`) });

        console.log(`Loaded environment variables from ${envFile}`);
        console.log(`Validating Prisma schema...${envFile}`);

        execSync('npx prisma validate', { 
            stdio: 'inherit',
            env: {
                ...process.env,
                DATABASE_URL: process.env.DATABASE_URL,
            }
        });

        console.log('Prisma schema is valid.');
        return true;

    } catch (error) {
        console.error(`Error validating Prisma schema: ${error.message}`);
        return false;
    }
}

const environmentFiles = ['.env.development', '.env.test'];

let hasErrors = false;

environmentFiles.forEach((envFile) => {
    console.log(`\n=== Checking ${envFile} ===`);
    if (!validateSchema(envFile)) {
        hasErrors = true;
    }
});

if (hasError) {
    process.exit(1);
}
