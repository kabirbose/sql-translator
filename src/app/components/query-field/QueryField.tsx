export default function QueryField() {
  return (
    <div>
      <p>Convert English to SQL</p>
      <input
        className="bg-zinc-700 p-2 rounded-full w-[90%]"
        placeholder="Create a new table called 'employees' and add 5 characters from The Office to it."
      />
    </div>
  );
}
