import { title } from "process";
import { createContext, useEffect, useState, ReactNode, Provider } from "react";
import { api } from "../../services/api";

interface Transactions {
    id: number;
    title: string;
    selectTypeButtonDeposit: "deposit" | "withdraw";
    value: number;
    category: string;
    date: number;
} 

interface TransactionsInputs{
  title: string;
  selectTypeButtonDeposit: string;
  value: number;
  category: string;
}

interface TrasactionsContextData{
  transactions: Transactions[];
  createTransactions: (transactions: TransactionsInputs) => void; 
}

interface ProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TrasactionsContextData>({} as TrasactionsContextData);

export function TrasactionsProvider({ children } : ProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  // function submitModalTransactionsAtualized(){
  //   const id = parseInt("10000000000000000", Math.random() * 10);
  //   const data = {
  //     id,
  //     title,
  //     value,
  //     category,
  //     selectTypeButtonDeposit,
  //   };
  //   console.log(data);
  // }

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransactions(transactions: TransactionsInputs){
    api.post('/transactions', transactions);
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransactions}}>
      {children}
    </TransactionsContext.Provider>
  );
}
