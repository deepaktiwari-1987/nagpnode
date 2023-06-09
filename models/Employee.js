/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const employee = sequelize.define('employee', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      designation: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      tableName: 'employee'
    });
  
    return employee;
  };