/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
    const employee = sequelize.define('employee', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
      },
      designation: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      salary: {
        type: DataTypes.REAL,
        allowNull: true
      }
    }, {
      tableName: 'employee'
    });
  
    return employee;
  };