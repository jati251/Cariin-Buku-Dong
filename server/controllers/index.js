const { User, Wishlist } = require('../models')
const axios = require('axios')
const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')

class Controller {

    static async register(req, res, next) {
        try {
            const user = await User.create(req.body)
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (error) {
            // console.log(error);
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            console.log(req.body);
            // console.log(req.body);
            if (!email) throw ({ name: "emailEmpty" })
            if (!password) throw { name: "passwordEmpty" }

            const user = await User.findOne({
                where: {
                    email,
                }
            })

            if (!user || !comparePassword(password, user.password)) throw { name: "Unauthenticated" }
            let token = signToken({ id: user.id })

            res.status(200).json({
                access_token: token,
                userId: user.id,
                email: user.email
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getBooks(req, res, next) {
        const { keyword } = req.query
        try {
            let { data } = await axios({
                method: 'GET',
                url: `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
            })
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getBookById(req, res, next) {
        const { id } = req.params
        try {
            let { data } = await axios({
                method: 'GET',
                url: `https://www.googleapis.com/books/v1/volumes/${id}`
            })
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getWishlists(req, res, next) {
        const userId = req.user.id;
        try {
            const wishlist = await Wishlist.findAll({
                where: {
                    userId,
                },
            });
            console.log(wishlist);
            res.status(200).json({
                message: "success get wishlist",
                wishlist,
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async addWishlist(req, res, next) {
        const userId = req.user.id;
        let { bookId, name, imgUrl, rating, authors } = req.body;
        if (!rating) {
            rating = 0
        }
        try {
            const newWishList = await Wishlist.create({
                bookId, 
                name, 
                imgUrl, 
                rating,
                authors,
                userId,
            });
            console.log(newWishList);
            res.status(201).json({
                message: "success created wishlist",
                newWishList,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async deleteWishlist(req, res, next) {
        const { id } = req.params
        try {

        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = Controller