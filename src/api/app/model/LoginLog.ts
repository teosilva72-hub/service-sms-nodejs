import conn from '../../../config/db/mysql';
import Sequelize from 'sequelize';
import User from './userModel';

const LoginLog = conn.conn.define('login_log',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: Sequelize.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

LoginLog.belongsTo(User, {
    constraints: true,
    foreignKey: 'id_user'
});
//LoginLog.sync({ force: true });
export default LoginLog;