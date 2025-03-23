import HistoryItem from "./HistoryItem";

export default function History() {
  return (
    <div className="h-[25rem] p-5 flex flex-col gap-2">
      <p className="font-bold">History</p>

      <HistoryItem text="SELECT * FROM table" />
    </div>
  );
}
