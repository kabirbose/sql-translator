"use client";

import { useState } from "react";

export default function QueryField() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleQuery = async () => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/query", { method: "POST" });
      const data = await res.json();

      if (data.success) {
        setResponse(`Query executed:\n${data.query}`);
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
      <p>Convert English to SQL</p>

      <div>
        <input
          className="bg-zinc-700 p-2 rounded-full w-[90%]"
          placeholder="Create a new table called 'employees' and add 5 characters from The Office to it."
        />
        <button onClick={handleQuery} disabled={loading}>
          Submit
        </button>
        {loading ? "Running..." : "Run Query"}
        {response && (
          <pre className="mt-4 p-2 bg-gray-900 text-white">{response}</pre>
        )}
      </div>
    </div>
  );
}
