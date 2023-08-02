const router = require("express").Router();
const {authentication}=require('../middlewares/authentication')
const Controller = require('../controllers')

router.post("/login", Controller.login);
router.post("/register", Controller.register);
router.get("/books", Controller.getBooks);
router.get("/book/:id", Controller.getBookById);
router.use(authentication)
router.get("/wishlist", Controller.getWishlists);
router.post("/wishlist/add", Controller.addWishlist);
router.delete("/wishlist/delete/:id", Controller.deleteWishlist);

module.exports = router;
