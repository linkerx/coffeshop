import db from '../config/db';
import { DataTypes } from 'sequelize';
import product from './product';

const combo = db.define(
    'combo',
    {
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },
    {
        freezeTableName: true,
    }
)

combo.belongsTo(product,{ as: 'parent'})
//combo.belongsTo(product,{ as: 'child'})

export default combo;