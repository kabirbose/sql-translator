import LeftSideBar from "./components/ui/LeftSideBar";
import RightScreen from "./components/ui/RightScreen";

export default function Home() {
  return (
    <div className="flex">
      <LeftSideBar />
      <RightScreen />
    </div>
  );
}
