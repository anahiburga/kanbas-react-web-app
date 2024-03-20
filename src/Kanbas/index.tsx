// since the Kanbas component consists of an entire application with lots of screens
// each implemented in several files, we've decided to use an entire folder to implement
// the component. It is common use the same name for the folder and component name, but
// it is not required.
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css"
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
   const [courses, setCourses] = useState<any[]>(db.courses);
   const [course, setCourse] = useState({
     _id: "CS1210", 
     name: "Professional Development Co-op", 
     number: "CS1210",
     startDate: "2024-09-10", 
     endDate: "2024-12-15",
     image: "reactjs.png",
   });
   const addNewCourse = () => {
     setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
   };
   const deleteCourse = (courseId: any) => {
     setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = () => {
     setCourses(
       courses.map((c) => {
         if (c._id === course._id) {
           return course;
         } else {
           return c;
         }
       })
     );
   }; 
   return (
      <Provider store={store}>
         <div className="kanbas-container">
            <KanbasNavigation />
            <div className="kanbas-content">
               <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element={<h1>Account</h1>} />
                  <Route path="Dashboard" element={
                     <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>} />
                  <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
               </Routes>
            </div>
         </div>
      </Provider>
   );
}
export default Kanbas;