import jwt from "jsonwebtoken";

const verifytoken = async (req, res, next) => {
    try {
        let token = req.header('Auothorization');
        if (!token){
            return res.status(403).send('Access Denied');
        }
        if (token.startsWith('Bearer')) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



export {verifytoken}