'use strict';
const { hashPassword } = require('../helpers/bcrypt')
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const user = [{
      email: 'jati.suryo@gmail.com',
      password: hashPassword("12345"),
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Users', user, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
