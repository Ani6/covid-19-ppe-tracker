'use strict';
module.exports = (sequelize, DataTypes) => {
  const Requirement = sequelize.define('Requirement', {
    name: DataTypes.STRING,
    quantity: DataTypes.DOUBLE,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE
  }, {});
  Requirement.associate = function(models) {
    // associations can be defined here
    Requirement.belongsTo(models.PPEType, {
      onDelete: "SET NULL",
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Requirement;
};