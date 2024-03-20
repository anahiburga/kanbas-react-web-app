import { CourseType } from "../Database";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses({ courses }: { courses: CourseType[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    
    const locationId = useLocation();

    const getCurrentBreadcrumbLabel = () => {
      const pathname:string = locationId.pathname;

      const subPath = pathname.replace(`/Kanbas/Courses/${courseId}/`, '');
        if (subPath === '') {
            return courseId;
        }
        const breadcrumbMapping: { [key: string]: string } = {
            "Home": "Modules",
            "Modules": "Modules",
            "Piazza": "Piazza",
            "Grades": "Grades",
            "Assignments": "Assignments",
        };
        return breadcrumbMapping[subPath] || null;
    };

    const currentBreadcrumbLabel = getCurrentBreadcrumbLabel();

    return (
        <div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/Kanbas">
                  <HiMiniBars3 className= "breadcrumb-bars" />
                </Link>
              </li>
              <li className="breadcrumb-item breadcrumb-class-inactive" aria-current="page">
                <Link to={`/Kanbas/Courses/${course?._id}`}>
                  {course?._id}
                </Link>
              </li>
              {currentBreadcrumbLabel && (
                <li className="breadcrumb-item active breadcrumb-class">
                    <Link to={`/Kanbas/Courses/${course?._id}/${currentBreadcrumbLabel}`}>
                    {currentBreadcrumbLabel}
                    </Link>
                </li>
              )}
            </ol>
            <hr />
          </nav>
          <div className="courses-content">
            <CourseNavigation />
            <div className="routes-content">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                <Route path="Grades" element={<h1>Grades</h1>} />
              </Routes>
            </div>
          </div>
        </div>
      );
    }
export default Courses;