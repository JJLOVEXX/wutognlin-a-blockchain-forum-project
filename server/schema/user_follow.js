/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_follow', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    followed_user_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    followed_user_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    follow_status: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    created_at: {
      type: DataTypes.STRING(16),
      allowNull: false
    }
  }, {
    tableName: 'user_follow'
  });
};
