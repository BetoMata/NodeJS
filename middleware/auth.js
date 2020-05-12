const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try
    {
        const token = req.headers.authorsization.split(" ")[1];
        const decoded = jwt.verify(token, "debugkey");
        req.user = decoded;
        next();
    }
    catch (err) 
    {
        return res.status(401).json({ code: 401, message: "No tienes permiso :("})
    }
}