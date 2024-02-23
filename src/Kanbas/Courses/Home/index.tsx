import ModuleList from "../Modules/List";
import Status from "./Status";
import "./index.css"

function Home() {
  return (
    <div className="home-content">
      <div className="module-list-content">
        <ModuleList />
      </div>
      <div className="status-content">
        <Status />
      </div>
    </div>
  );
}
export default Home;