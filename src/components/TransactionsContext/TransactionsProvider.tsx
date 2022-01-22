import { createContext, useEffect, useState, ReactNode, Provider } from "react";
import { api } from "../../services/api";

interface Props {
    id: number;
    title: string;
    selectTypeButtonDeposit: "deposit" | "withdraw";
    value: number;
    category: string;
    date: number;
} 

interface ProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Props[]>([]);

export function TrasactionsProvider({ children } : ProviderProps) {
  const [transactions, setTransactions] = useState<Props[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return(
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );

}
