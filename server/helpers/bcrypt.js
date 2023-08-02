const { compareSync, genSaltSync, hashSync } = require('bcryptjs')

module.exports = {
    comparePassword: (password, hashed) =>
        compareSync(password, hashed),

    hashPassword: (password) =>
        hashSync(password, genSaltSync(8))
}