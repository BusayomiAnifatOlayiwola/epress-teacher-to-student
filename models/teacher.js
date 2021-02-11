'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.teacher.belongsTo(models.student)
      models.teacher.belongsToMany(models.student, { through: 'teachersStudents' });
    }
  };
  teacher.init({
    tname: DataTypes.STRING,
    class: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'teacher',
  });
  return teacher;
};