import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
    <div>
        <div className="wd-modules-buttons">
            <button className="btn wd-modules-button">Collapse All</button>
            <button className="btn wd-modules-button">View Progress</button>
            <select className ="btn wd-modules-button" id="publish">
                <option value="PUBLISH-ALL" className ="wd-modules-button">
                <CiCircleCheck/> Publish All</option>
            </select>
            <button className="btn wd-modules-button-module">+ Module</button>
            <button className="btn wd-modules-button"><FaEllipsisV/></button>
        </div>
        <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
            <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
                </span>
            </div>
            {selectedModule._id === module._id && (
                <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                    <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                    </span>
                    </li>
                ))}
                </ul>
            )}
            </li>
        ))}
        </ul>
    </div>
    </>
  );
}
export default ModuleList;