import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/sequelize.js';

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize: sequelize,
        tableName: 'posts',
    }
);

export { Post };