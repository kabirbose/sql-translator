interface Props {
  text: string;
}

export default function HistoryItem({ text }: Props) {
  return (
    <div className="border-b-2 p-2 border-zinc-800 flex flex-col gap-2">
      <p className="bg-zinc-800 text-purple-400 p-1 rounded-md font-mono">
        {text}
      </p>
    </div>
  );
}
