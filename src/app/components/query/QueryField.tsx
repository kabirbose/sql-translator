"use client";

import { useState } from "react";
import { useConnectionContext } from "@/app/context/ConnectionContext";
import { useHistoryContext } from "@/app/context/HistoryContext";

export default function QueryField() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [query, setQuery] = useState("");

  const { hostname, portId, username, password, database } =
    useConnectionContext();

  const { historyBlock, setHistoryBlock } = useHistoryContext();

  const handleQueryAction = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          hostname,
          portId,
          username,
          password,
          database,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setResponse(`${data.query}`);
        setHistoryBlock((prev) => [...prev, data.query]);
      } else {
        setResponse(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponse(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>{loading ? "Generating..." : ""}</p>
      <p className="mt-4 p-2 bg-zinc-900 text-purple-400 font-mono h-[20rem] rounded-md">
        {response}
      </p>

      <div className="flex justify-start items-center p-2 gap-5">
        <input
          className="bg-zinc-700 p-2 rounded-full w-[90%] outline-0 border-0"
          placeholder="Create a new table called 'employees' and add 5 characters from The Office to it."
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setQuery(e.target.value)}
          value={query}
        />
        <button
          onClick={handleQueryAction}
          disabled={loading}
          className="bg-blue-600 p-2 rounded-md"
        >
          Query
        </button>
      </div>
    </div>
  );
}
