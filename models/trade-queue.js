import { DataTypes, literal } from "sequelize";
import sequelize from "../utils/sequelize-instance.js";
const TradeQueueModel = sequelize.define(
  "TradeQueue",
  {
    QueueSeq: {
      field: "queue_id",
      type: DataTypes.DATE,
      defaultValue: literal("CURRENT_TIMESTAMP"),
      primaryKey: true
    },
    TradeSeq: {
      field: "trade_seq",
      type: DataTypes.DATE,
      allowNull: false
    },
    UserId: {
      field: "user_id",
      type: DataTypes.STRING,
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
      type: DataTypes.DATE,
      allowNull: false
    },
    FinishDate: {
      field: "finish_date",
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    tableName: "trade_queues"
  }
);
export default TradeQueueModel;
