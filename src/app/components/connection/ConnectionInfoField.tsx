interface Props {
  text: string;
  type?: string;
}

export default function ConnectionInfoField({ text, type }: Props) {
  return (
    <div className="w-[18rem] flex justify-between items-center">
      <label>{text}: </label>
      <input
        type={type || "text"}
        className="bg-zinc-800 outline-0 border-0 p-1"
      />
    </div>
  );
}
