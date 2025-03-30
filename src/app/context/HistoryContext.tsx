"use client";

import { useContext, createContext, useState, ReactNode } from "react";

interface HistoryContextType {
  historyBlock: string[];
  setHistoryBlock: (value: string[] | ((prev: string[]) => string[])) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [historyBlock, setHistoryBlock] = useState<string[]>([]);

  return (
    <HistoryContext.Provider value={{ historyBlock, setHistoryBlock }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useHistoryContext must be used within a HistoryProvider");
  }
  return context;
};
