import ConnectionInfoField from "./ConnectionInfoField";

export default function ConnectionInfo() {
  return (
    <div className="h-[17rem] p-5 flex flex-col gap-2 border-b-2 border-zinc-800">
      <p className="font-bold">Database Connection</p>
      <form className="flex flex-col gap-2">
        <ConnectionInfoField text="Hostname" />
        <ConnectionInfoField text="Port ID" />
        <ConnectionInfoField text="Username" />
        <ConnectionInfoField text="Password" />
        <ConnectionInfoField text="Database" />
      </form>
    </div>
  );
}
