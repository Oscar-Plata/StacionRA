'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Experiencia', [
      {
        id: 1,
        descripcion: "Locomotora del parque ferro",
        imagen: "tren.jpg",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 2,
        descripcion: "Puesto de bazar 1",
        imagen: "puesto1.jpg",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Experiencia', null, {});
  }
};
