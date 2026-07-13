
const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization

        if(!authHeader) {
            return res.status(401).json({
                message : "Access denied!, No token provided"
            })
        }

        const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader

        const secret = process.env.JWT_SECRET || "SALMAN_DEV1212"

        const decoded = jwt.verify(token, secret)

        req.user = decoded

        next()
    } catch(error) {
        return res.status(401).json({
            message : "Invalid or expired token"
        })
    }
}

module.exports = verifyToken