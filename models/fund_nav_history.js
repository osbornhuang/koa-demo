import { DataTypes, literal } from "sequelize";
import sequelize from "../utils/sequelize_instance";
const FundNAVHistoryModel = sequelize.define(
  "FundNAVHistory",
  {
    LogSeq: {
      field: "log_seq",
      type: "TIMESTAMP",
      defaultValue: literal("CURRENT_TIMESTAMP"),
      primaryKey: true
    },
    FundId: {
      field: "fund_id",
      type: "TIMESTAMP",
      allowNull: false
    },
    FundNAV: {
      field: "fund_nav",
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    LogDate: {
      field: "log_date",
      type: "TIMESTAMP",
      defaultValue: literal("CURRENT_TIMESTAMP"),
      allowNull: false
    }
  },
  {
    tableName: "fund_nav_history"
  }
);
export default FundNAVHistoryModel;
