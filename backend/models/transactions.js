'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    tableNumber: DataTypes.INTEGER,
    finishedTime: DataTypes.STRING,
    subtotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    serviceCharge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
  };
  return transactions;
};