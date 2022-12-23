import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize-instance.js";
const FundTypeModel = sequelize.define(
  "FundType",
  {
    TypeId: {
      field: "type_id",
      type: DataTypes.STRING,
      primaryKey: true
    },
    FundFee: {
      field: "fund_fee",
      type: DataTypes.NUMBER,
      allowNull: false
    }
  },
  {
    tableName: "fund_types"
  }
);
export default FundTypeModel;
