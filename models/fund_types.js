import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize_instance";
const FundTypeModel = sequelize.define(
  "FundType",
  {
    FundType: {
      field: "fund_type",
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
