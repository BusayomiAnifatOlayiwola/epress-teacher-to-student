'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teachersStudents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  teachersStudents.init({
    teacherId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'teachersStudents',
  });
  return teachersStudents;
};