'use strict';
const {sequelize}=require("../config/Sequelize");
const {
  Model,DataTypes
} = require('sequelize');
class user extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

user.init({
  ref_code: {
    type:DataTypes.STRING
  },
  fullname: {
    type:DataTypes.STRING
  },
  birthday: {
    type:DataTypes.DATE
  },
  nik: {
    type:DataTypes.STRING
  },
  religion: {
    type:DataTypes.STRING
  },
  address: {
    type:DataTypes.STRING
  },
  occupation: {
    type:DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user',
});

module.exports=user;
