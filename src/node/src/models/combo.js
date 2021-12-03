import db from '../config/db';
import { DataTypes } from 'sequelize';
import product from '../models/product';

const combo = db.define(
    'combo',
    {
        count: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
    }
);

//product.belongsTo(product, {as: "parent", foreingKey: "parentId", through: "combo"})
product.belongsToMany(product, {as: "child", foreignKey: "parentId", through: "combo"})

export default combo;

