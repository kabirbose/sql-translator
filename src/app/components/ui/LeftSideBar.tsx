import ConnectionInfo from "../connection/ConnectionInfo";
import History from "../history/History";

export default function LeftSideBar() {
  return (
    <div className="bg-zinc-900 text-white h-[100vh] w-[30%] p-5">
      <ConnectionInfo />
      <History />
    </div>
  );
}
