module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:
    {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: DataTypes.STRING,
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });
  return User;
}