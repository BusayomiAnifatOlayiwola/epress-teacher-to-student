'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.student.belongsTo(models.teacher)
      models.student.belongsToMany(models.teacher, { through: 'techersStudents' });
    }
  };
  student.init({
    sname: DataTypes.STRING,
    subject: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};