# Koa-demo
基於 koa2 實作 RESTful API, 並具有排程處理、郵件通知功能
## 準備工作
* 安裝 [pnpm](https://pnpm.io/zh-TW/)
## 設定檔說明
* app.config.js 系統設定檔
* db.config.js 資料庫連結資訊
* cron.config.js 排程時間設定
## controllers
* user-controller 用戶 api 相關回應及操作
* bank-controller 銀行 api 相關回應及操作

## middleware
* authorization-handler 認證無效時回應
* http-verb-trace HTTP Request 及 Response 追蹤
* swagger-ui 提供 api 文件介面
  - swagger.json 尚未提供
  - 還在考慮要用哪個方法來產生 yaml
## models
使用 Sequelize 定義需要的 model
* 在 db-init 有先定義資料表
* 也可以在 model 變更再用 sequelize.sync()同步異動資料表
## services
邏輯處理部分
* auth-service 用戶登入驗證
* bank-service 銀行相關服務
* cron-service 排程服務
  - 交易佇列排程處理
  - NAV 更新排程處理
* mail-service 郵件通知服務
