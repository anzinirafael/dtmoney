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
  createTransactions: (transactions: TransactionsInputs) => Promise<void>; 
}

interface ProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TrasactionsContextData>({} as TrasactionsContextData);

export function TrasactionsProvider({ children } : ProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransactions(transactionsInputs: TransactionsInputs){
    const response = await api.post('/transactions', { ...transactionsInputs, date: new Date()});
    const {transaction}  = response.data;
    setTransactions([
      ...transactions,
      transaction,
    ]);

  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransactions}}>
      {children}
    </TransactionsContext.Provider>
  );
}
