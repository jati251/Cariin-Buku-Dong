const { verify, sign } = require('jsonwebtoken')

const secretKey = process.env.JWT_SECRET

module.exports = {
    signToken: (payload) =>
        sign(payload, secretKey),

    verifyToken: (payload) =>
        verify(payload, secretKey)
}