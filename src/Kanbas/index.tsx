// since the Kanbas component consists of an entire application with lots of screens
// each implemented in several files, we've decided to use an entire folder to implement
// the component. It is common use the same name for the folder and component name, but
// it is not required.
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
function Kanbas() {
   return (
     <div className="d-flex">
         <KanbasNavigation />
         <div style={{ flex: "1" }}>
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/*" element={<h1>Courses</h1>} />
            </Routes>
         </div>
     </div>
   );
}
export default Kanbas;