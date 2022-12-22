import { DataTypes, literal } from "sequelize";
import sequelize from "../utils/sequelize_instance";
const TradeQueueModel = sequelize.define(
  "TradeQueue",
  {
    QueueSeq: {
      field: "queue_id",
      type: "TIMESTAMP",
      defaultValue: literal("CURRENT_TIMESTAMP"),
      primaryKey: true
    },
    UserId: {
      field: "trade_seq",
      type: "TIMESTAMP",
      allowNull: false
    },
    QueueState: {
      field: "queue_state",
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    TriggerDate: {
      field: "trigger_date",
      type: "TIMESTAMP",
      allowNull: false
    },
    FinishDate: {
      field: "finish_date",
      type: "TIMESTAMP",
      allowNull: true
    }
  },
  {
    tableName: "trade_queues"
  }
);
export default TradeQueueModel;
