'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [
      {
        id: 1,
        nombre: "Naylim",
        correo: "ndorame@uabc.edu.mx",
        password:"1234",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: "Oscar",
        correo: "oscar@uabc.edu.mx",
        password:"5678",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
