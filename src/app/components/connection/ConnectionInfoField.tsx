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
    <div className="w-[18rem] flex justify-between items-center">
      <label>{text}: </label>
      <input
        type={type || "text"}
        className="bg-zinc-800 outline-0 border-0 p-1 rounded-md [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden 
  [-moz-appearance:textfield]"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
