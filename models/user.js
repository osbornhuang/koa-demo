import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize_instance";
const UserModel = sequelize.define(
  "User",
  {
    UserId: {
      field: "user_id",
      type: DataTypes.STRING,
      primaryKey: true
    },
    UserName: {
      field: "user_name",
      type: DataTypes.STRING,
      allowNull: false
    },
    UserPassword: {
      field: "user_password",
      type: DataTypes.STRING,
      allowNull: false
    },
    UserBalance: {
      field: "user_balance",
      type: DataTypes.NUMBER,
      defaultValue: 0
    }
  },
  {
    tableName: "user_list"
  }
);
export default UserModel;
