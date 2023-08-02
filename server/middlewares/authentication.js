const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

module.exports = {
  authentication: async (req, res, next) => {
    try {
      let token = req.headers.access_token
      let { id } = verifyToken(token)
      let user = await User.findByPk(id)
      req.user = {
        id: user.id,
        email: user.email
      }
      next()
    } catch (error) {
      next(error)
    }
  },
}