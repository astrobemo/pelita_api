import jwt from 'jsonwebtoken';
import {TOKENSECRET, LIFETIME} from '../config/loadEnv.js';

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