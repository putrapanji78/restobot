'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.INTEGER
      },
      menu_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'menus',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      transactions_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'transactions',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};