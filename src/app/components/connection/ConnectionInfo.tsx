"use client";

import ConnectionInfoField from "./ConnectionInfoField";
import { useState } from "react";

export default function ConnectionInfo() {
  const [hostname, setHostname] = useState("");
  const [portId, setPortId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [database, setDatabase] = useState("");

  return (
    <div className="h-[17rem] p-5 flex flex-col gap-2 border-b-2 border-zinc-800">
      <p className="font-bold">Connection</p>
      <form className="flex flex-col gap-2">
        <ConnectionInfoField
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setHostname(e.target.value)}
          text="Hostname"
          value={hostname}
        />
        <ConnectionInfoField
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setPortId(e.target.value)}
          text="Port ID"
          type="number"
          value={portId}
        />
        <ConnectionInfoField
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setUsername(e.target.value)}
          text="Username"
          value={username}
        />
        <ConnectionInfoField
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setPassword(e.target.value)}
          text="Password"
          type="password"
          value={password}
        />
        <ConnectionInfoField
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setDatabase(e.target.value)}
          text="Database"
          value={database}
        />
      </form>
    </div>
  );
}
