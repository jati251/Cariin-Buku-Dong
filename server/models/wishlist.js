'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wishlist.init({
    bookId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    authors: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Wishlist',
  });
  return Wishlist;
};