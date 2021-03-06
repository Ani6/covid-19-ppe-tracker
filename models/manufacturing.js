'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manufacturing = sequelize.define('Manufacturing', {
    name: DataTypes.STRING,
    quantity: DataTypes.DOUBLE,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  Manufacturing.associate = function (models) {
    // associations can be defined here
    Manufacturing.belongsTo(models.PPEType, {
      onDelete: "SET NULL",
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Manufacturing;
};