import React, { useState } from "react";
import "./index.css";
import { ModuleType } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  const dispatch = useDispatch();

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
            <input className="wd-modules-new-module-name"
                value={module.name}
                onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
            }/>
            <br />
            <textarea className="wd-modules-new-module-name"
                value={module.description}
                onChange={(e) =>
                    dispatch(setModule({ ...module, description: e.target.value }))
            }/>
            <br />
            <button className="wd-modules-button"
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
            </button>
            <button className="wd-modules-button"
                onClick={() => dispatch(updateModule(module))}>
                Update
            </button>
            <li className="list-group-item"></li>
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                    <li key={index} className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                    <div>
                        <FaEllipsisV className="me-2" />
                        {module.name}
                        <button className="wd-modules-button"
                            onClick={() => dispatch(setModule(module))}>
                            Edit
                        </button>
                        <button className="wd-modules-button-delete"
                            onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    {selectedModule._id === module._id && (
                        <ul className="list-group">
                        {module.lessons?.map((lesson:ModuleType, index:number) => (
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