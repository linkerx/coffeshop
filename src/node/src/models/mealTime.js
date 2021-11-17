import db from '../config/db';
import { DataTypes } from 'sequelize';

const mealTime = db.define(
    'mealTime',
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

export default mealTime;
  
