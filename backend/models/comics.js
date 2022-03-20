'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comics.belongsTo(models.tiendas,{
        foreignKey: "nombre_Tienda",
        onDelete:"cascade"
      })
    }
  }
  comics.init({
    nombre: DataTypes.STRING,
    autor: DataTypes.STRING,
    imagen: DataTypes.STRING,
    nombre_tienda: DataTypes.STRING,
    enlace: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comics',
  });
  return comics;
};