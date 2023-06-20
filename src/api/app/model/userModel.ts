import conn from '../../../config/db/mysql';
import Sequelize from 'sequelize';

const User = conn.conn.define('user',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },

  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

//User.sync({ force: true });


export default User;