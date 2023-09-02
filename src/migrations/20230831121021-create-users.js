'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:
      {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName:
      {
        field: 'display_name',
        type: Sequelize.STRING,
      },
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      image: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
