import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadEnvFile = (filePath) => {
    // console.log('path', filePath);
    const result = dotenv.config({ path: filePath });
    // console.log('result', result);
    const envMain = process.env.ENVIRONMENT;
    // console.log('envMain', envMain);
    if (result.error) {
      throw new Error(`Warning: Could not load .env file at ${filePath}`);
    }
};

// Load the root .env file first
loadEnvFile(path.resolve(__dirname, '../../.env'));

// Now, load the environment-specific .env file
const envMain = process.env.ENVIRONMENT || 'development';
loadEnvFile(path.resolve(__dirname, `../.env.${envMain}`));
  
TOKEN_LIFETIME
const LIFETIME = process.env.TOKEN_LIFETIME || '3h';
const TOKENSECRET = process.env.TOKEN_SECRET || 'development';

const generateToken = (payload) => {
    console.log('tokenSecret',TOKENSECRET, ' LIFETIME', LIFETIME);
    console.log('Token generated at:', new Date().toISOString());
    return jwt.sign(payload, TOKENSECRET, {expiresIn: LIFETIME});
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization
        
    if(!token) return res.status(403).send({success: false, message:"Token is required"})
    if(!token.includes(`Bearer `)) return res.status(403).send({success: false, message:"Token is not valid"})
    
    token = token.replace(`Bearer `, ``)
    jwt.verify(token, TOKENSECRET, function(err, decoded) {
        if(err){
            return res.status(401).send({success: false, message:"Token has expired"})
        }else {
            req.decoded = decoded
            next()
        }
    })

}

export default {generateToken, verifyToken}