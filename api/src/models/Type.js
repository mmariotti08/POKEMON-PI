const { DataTypes, UUIDV4 } = require('sequelize');

module.exports=(sequelize)=>{

    sequelize.define('pokemon',{
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
    });
};