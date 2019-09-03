'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.INTEGER,
    menu_Id: DataTypes.INTEGER,
    transactions_Id: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.menus, {
      as:'menuId',
      foreignKey: 'menu_Id'
    })
    orders.belongsTo(models.transactions, {
      as:'transactions',
      foreignKey: 'transactions_Id'
    })
  };
  return orders;
};