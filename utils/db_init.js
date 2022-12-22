import { queryAsync } from "./db_instance";
const installUUidossp = async () => {
  try {
    await queryAsync(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    return Promise.resolve(true);
  } catch (err) {
    queryErrorHandler(err);
  }
};
const createDatabase = async dbName => {
  try {
    const sqltext = `select 'create database ${dbName}'
    where not exists (select from pg_database where datname = '${dbName}');`;
    await queryAsync(sqltext);
    return Promise.resolve(true);
  } catch (err) {
    return queryErrorHandler(err);
  }
};
const defineUserListSchema = async () => {
  try {
    const sqltext = `create table if not exists user_list(
      user_id varchar(20) PRIMARY KEY,
      user_name varchar(20) NOT NULL,
      user_password varchar(80) NOT NULL,
      user_balance numeric default 0.0
    );`;
    await queryAsync(sqltext);
    return Promise.resolve(true);
  } catch (err) {
    return queryErrorHandler(err);
  }
};
const defineFundListSchema = async () => {
  try {
    const sqltext = `create table if not exists fund_list(
      fund_id varchar(20) PRIMARY KEY,
      fund_name varchar(30) NOT NULL,
      fund_type char(1) NOT NULL,
      fund_nav numeric ,
      fund_currency varchar(4) default 'USD'
    );`;
    await queryAsync(sqltext);
    return Promise.resolve(true);
  } catch (err) {
    return queryErrorHandler(err);
  }
};
const defineFundTypesSchema = async () => {
  try {
    const sqltext = `create table if not exists fund_types(
      fund_type char(1) PRIMARY KEY,
      fund_fee numeric
    );`;
    await queryAsync(sqltext);
    return Promise.resolve(true);
  } catch (err) {
    return queryErrorHandler(err);
  }
};
const defineTradeLogsSchema = async () => {
  try {
    const sqltext = `create table if not exists trade_logs(
      trade_seq timestamp PRIMARY KEY,
      user_id varchar(20) NOT NULL,
      fund_id varchar(20) NOT NULL,
      trade_nav numeric,
      trade_amount numeric,
      trade_fee numeric,
      trade_date timestamp,
      trade_state int default 0,
      has_notify boolean
    );`;
    await queryAsync(sqltext);
    return Promise.resolve(true);
  } catch (err) {
    return queryErrorHandler(err);
  }
};
const defineTradeQueuesSchema = async () => {
  try {
    const sqltext = `create table if not exists trade_queues(
      queue_seq timestamp PRIMARY KEY,
      trade_seq timestamp NOT NULL,
      queue_state int default 0,
      trigger_date timestamp,
      finish_date timestamp
    );`;
    await queryAsync(sqltext);
    return Promise.resolve(true);
  } catch (err) {
    return queryErrorHandler(err);
  }
};
const defineFundNAVHistorySchema = async () => {
  try {
    const sqltext = `create table if not exists fund_nav_history(
      log_seq timestamp PRIMARY KEY,
      fund_id varchar(20) PRIMARY KEY,
      fund_nav numeric ,
      log_date timestamp default CURRENT_TIMESTAMP
    );`;
    await queryAsync(sqltext);
    return Promise.resolve(true);
  } catch (err) {
    return queryErrorHandler(err);
  }
};
const init = async () => {
  try {
    await installUUidossp();
    await defineUserListSchema();
    await defineFundListSchema();
    await defineFundTypesSchema();
    await defineTradeLogsSchema();
    await defineTradeQueuesSchema();
    await defineFundNAVHistorySchema();
  } catch (err) {
    return queryErrorHandler(err);
  }
};
