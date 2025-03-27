interface Props {
  text: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function ConnectionInfoField({
  text,
  type,
  onChange,
  value,
}: Props) {
  return (
    <div className="w-[18rem] flex justify-between items-center rounded-md">
      <label>{text}: </label>
      <input
        type={type || "text"}
        className="bg-zinc-800 outline-0 border-0 p-1"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
