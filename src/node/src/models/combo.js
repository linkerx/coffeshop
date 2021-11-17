import db from '../config/db';
import product from './product';

const combo = db.define(
    'combo',
    {},
    {
        freezeTableName: true,
    }
)

combo.belongsTo(product,{ as: 'parent'})
//combo.belongsTo(product,{ as: 'child'})

