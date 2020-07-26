import {DataTypes, Model} from 'sequelize';

import {sequelize} from '../../config';

class User extends Model {
}

User.init({
  status: {
    type: DataTypes.STRING,
    defaultValue: 'ACTIVE'
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  sequelize,
  modelName: 'user'
});

export const userModel = User;
