import { DataTypes, literal } from "sequelize";
import sequelize from "../utils/sequelize_instance";
const TradeLogModel = sequelize.define(
  "TradeLog",
  {
    TradeSeq: {
      field: "fund_id",
      type: "TIMESTAMP",
      defaultValue: literal("CURRENT_TIMESTAMP"),
      primaryKey: true
    },
    UserId: {
      field: "user_id",
      type: DataTypes.STRING,
      allowNull: false
    },
    FundId: {
      field: "fund_id",
      type: DataTypes.STRING,
      allowNull: false
    },
    TradeNAV: {
      field: "trade_nav",
      type: DataTypes.NUMBER,
      allowNull: false
    },
    TradeAmount: {
      field: "trade_amount",
      type: DataTypes.NUMBER,
      allowNull: false
    },
    TradeFee: {
      field: "trade_fee",
      type: DataTypes.NUMBER,
      allowNull: false
    },
    TradeDate: {
      field: "trade_date",
      type: "TIMESTAMP",
      defaultValue: literal("CURRENT_TIMESTAMP")
    },
    TradeState: {
      field: "trade_state",
      type: DataTypes.TINYINT,
      defaultValue: 0
    },
    HasNotify: {
      field: "has_notify",
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: "trade_logs"
  }
);
export default TradeLogModel;
