import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize_instance";
const FundModel = sequelize.define(
  "Fund",
  {
    FundId: {
      field: "fund_id",
      type: DataTypes.STRING,
      primaryKey: true
    },
    FundName: {
      field: "fund_name",
      type: DataTypes.STRING,
      allowNull: false
    },
    FundType: {
      field: "fund_type",
      type: DataTypes.STRING,
      allowNull: false
    },
    FundNAV: {
      field: "fund_nav",
      type: DataTypes.NUMBER,
      defaultValue: 0
    },
    FundCurrency: {
      field: "fund_currency",
      type: DataTypes.STRING,
      defaultValue: "USD"
    }
  },
  {
    tableName: "fund_list"
  }
);
export default FundModel;
