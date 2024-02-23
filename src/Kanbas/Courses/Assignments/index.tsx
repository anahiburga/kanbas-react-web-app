import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { VscNotebook } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="d-flex justify-content-between">
        <input type="text" placeholder="Search for Assignment" />
        <div>
            <button className="btn wd-modules-button-group">+ Group</button>
            <button className="btn wd-modules-button-assignment">+ Assignment</button>
            <button className="btn wd-modules-button-group">
                <FaEllipsisV />
            </button>
        </div>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <VscNotebook className="me-2" /> 
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;