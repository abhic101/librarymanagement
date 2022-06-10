const jwt = require("jsonwebtoken");


const verify = (req,res,next) => {
    
    const token = req.header("auth-token");
    if(token == null){
        res.status(404).send("Token is null");
    }
    if(!token){
        res.status(404).send("Invalid Access");
    }
    
    try {
        const verified=jwt.verify(token,"HELLOMYNAMEISKANEANDIAMFULLSTACKDEVELOPER");
        req.user=verified;
        next();
    } catch (error) {
        res.status(404).send("Invalid token");
    }
}

module.exports = verify;