import db from '../config/db';
import { DataTypes } from 'sequelize';
import mealTime from './mealTime';
import mealType from './mealType';

const product = db.define(
    'product',
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
        price: {
            type: DataTypes.DECIMAL(10,2),
        },
                    
    },
    {
        timestamps: true,
        freezeTableName: true,
    }
);
  
product.belongsTo(mealTime);
mealTime.hasMany(product);

product.belongsTo(mealType);
mealType.hasMany(product);

product.belongsToMany(product, {as: "parent", foreingKey: "parentId", through: "combo"})
//product.belongsToMany(product, {as: "child", foreignKey: "childId", through: "combo"})

export default product;
