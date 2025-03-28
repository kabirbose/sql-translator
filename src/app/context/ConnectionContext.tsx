"use client";

import { useContext, createContext, useState, ReactNode } from "react";

interface ConnectionContextType {
  hostname: string;
  setHostname: (value: string) => void;
  portId: string;
  setPortId: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  database: string;
  setDatabase: (value: string) => void;
}

const ConnectionContext = createContext<ConnectionContextType | undefined>(
  undefined
);

export const ConnectionProvider = ({ children }: { children: ReactNode }) => {
  const [hostname, setHostname] = useState("");
  const [portId, setPortId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [database, setDatabase] = useState("");

  return (
    <ConnectionContext.Provider
      value={{
        hostname,
        setHostname,
        portId,
        setPortId,
        username,
        setUsername,
        password,
        setPassword,
        database,
        setDatabase,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};

export const useConnectionContext = () => {
  const context = useContext(ConnectionContext);
  if (!context) {
    throw new Error(
      "useConnectionContext must be used within a ConnectionProvider"
    );
  }
  return context;
};
