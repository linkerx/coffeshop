import db from '../config/db';
import { DataTypes } from 'sequelize';

const mealType = db.define(
    'mealType',
    {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        name: {
        type: DataTypes.STRING,
        unique: true,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

export default mealType;
  
  
