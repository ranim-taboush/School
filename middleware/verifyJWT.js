const jwt = require('jsonwebtoken');
const Admin = require('../Models/adminModel')

const authenticate = async (req, res, next) => {
    // const authToken = req.headers.authorization ||req.headers.Authorization;
    const authToken = req.cookies?.accessToken;
    if (!authToken) {
        return res.status(401).json({ message: "No token provided, access denied" });
    }
    try {
        const token = authToken.split(" ")[1];
        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await Admin.findOne({ _id: decodedPayload.id, token })
        if (!user) {
            return res.status(404).json({ message: "User not found, don't have an account?" });
        }
        req.user = user;
        req.token = token
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid token, access denied" });
    }
};

module.exports = authenticate