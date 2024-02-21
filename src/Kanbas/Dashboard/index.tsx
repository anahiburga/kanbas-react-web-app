import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
import reactjsLogo from "./reactjs.jpg"

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>             <hr />
      <h2>Published Courses (3)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card"
                    style={{ height: 275, width: 275 }}>
                <img src={ reactjsLogo } className="card-img-top"
                     style={{ height: 150 }} alt=""/>
                <div className="card-body"
                      style={{ height: 125 }}>
                  <Link className="card-title card-class-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold", textOverflow: "ellipsis"}}>
                    {course._id} {course.name} </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

