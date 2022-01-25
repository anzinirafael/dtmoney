import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";
import Db from "miragejs/db";

createServer({
  models: {
    transaction: Model
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de sites",
          selectTypeButtonDeposit: "deposit",
          value: 12000,
          category: "Trabalho",
          date: new Date()
        },
        {
          id: 2,
          title: "Hamburguer",
          selectTypeButtonDeposit: "withdraw",
          value: 36,
          category: "Alimentação",
          date: new Date()
        },
        {
          id: 3,
          title: "Aluguel do apartamento",
          selectTypeButtonDeposit: "withdraw",
          value: 1200,
          category: "Casa",
          date: new Date()
        },
        {
          id: 4,
          title: "Computador",
          selectTypeButtonDeposit: "withdraw",
          value: 5400,
          category: "Venda",
          date: new Date()
        }
      ] 
    })
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
