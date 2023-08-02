
module.exports = async (err, req, res, next) => {
    let status = err.name || 500
    let message = err.message || 'Internal Server Error'

    switch (err.name) {
        case "SequelizeDatabaseError":
            status = 409
            message = 'Error Database'
            break;
        case "SequelizeValidationError":
            status = 400
            message = err.errors.map((el) => el.message)[0]
            break;
        case "emailEmpty":
            status = 400
            message = 'Email is required'
            break;
        case "passwordEmpty":
            status = 400
            message = 'Password is required'
            break;
        case 'Unauthenticated':
            status = 401
            message = 'Invalid email/password'
            break;
        case 'JsonWebTokenError':
            status = 401
            message = 'Invalid token'
            break;
        case 'NotFound':
            status = 404
            message = 'Data not found'
            break;
        case 'SequelizeUniqueConstraintError':
            status=400
            message = 'Email must be unique'
            break;
        case 'unathorized':
            status=403
            message = 'You are forbidden to access'
            break;
    }

    res.status(status).json({ message })
}