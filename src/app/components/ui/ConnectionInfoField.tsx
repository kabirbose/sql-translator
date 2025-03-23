interface Props {
  text: string;
}

export default function ConnectionInfoField({ text }: Props) {
  return (
    <div className="w-[18rem] flex justify-between items-center">
      <label>{text}: </label>
      <input className="bg-zinc-800 outline-0 border-0 rounded-md p-1" />
    </div>
  );
}
