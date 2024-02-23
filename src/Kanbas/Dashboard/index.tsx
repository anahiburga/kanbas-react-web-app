import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";
import { VscNotebook } from "react-icons/vsc";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (3)</h2>  <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card" style={{ height: 275, width: 275 }}>
              <img
                  src={require(`../../images/${course.image}`)}
                  className="card-img-top"
                  alt="blah"
                  style={{ height: 150 }}
                />
                <div className="card-body" style={{ height: 120 }}>
                  <Link className="card-title card-class-title" to={`/Kanbas/Courses/${course._id}/Home`}>
                    {course._id} {course.name} </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn">
                    <VscNotebook /> </Link>
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