const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atack:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    weigth:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
  });
};
