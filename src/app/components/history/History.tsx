"use client";

import HistoryItem from "./HistoryItem";
import { useHistoryContext } from "@/app/context/HistoryContext";

export default function History() {
  const { historyBlock } = useHistoryContext();

  return (
    <div className="h-[25rem] p-5 flex flex-col gap-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <p className="font-bold">History</p>
      {historyBlock.map((block) => {
        return (
          <div key={Math.random()}>
            <HistoryItem text={block} />
          </div>
        );
      })}
    </div>
  );
}
