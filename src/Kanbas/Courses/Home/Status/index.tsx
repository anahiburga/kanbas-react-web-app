import { FaFileImport, FaBullhorn, FaRegBell, FaCalendarDays } from "react-icons/fa6";
import { TbArrowBigRightLine } from "react-icons/tb";
import { ImTarget } from "react-icons/im";
import { BsBarChartLineFill } from "react-icons/bs";
import "./index.css"
import { Link } from "react-router-dom";

function Status() {
  return (
    <div>
        <ul className="wd-list list-group">
            <li className="list-group-item wd-list-item">
                <Link to="/import">
                    <FaFileImport /> Import Existing Content
                </Link>
            </li>
            <li className="list-group-item wd-list-item">
                <Link to="/commons">
                    <TbArrowBigRightLine /> Import From Commons
                </Link>
            </li>
            <li className="list-group-item wd-list-item">
                <Link to="/home">
                    <ImTarget /> Choose Home Page
                </Link>
            </li>
            <li className="list-group-item wd-list-item">
                <Link to="/stream">
                    <BsBarChartLineFill /> View Course Stream
                </Link>
            </li>
            <li className="list-group-item wd-list-item">
                <Link to="/announcement">
                    <FaBullhorn /> New Announcement
                </Link>
            </li>
            <li className="list-group-item wd-list-item">
                <Link to="/analytics">
                    <BsBarChartLineFill /> New Analytics
                </Link>
            </li>
            <li className="list-group-item wd-list-item">
                <Link to="/notifications">
                    <FaRegBell /> View Course Notifications
                </Link>
            </li>
        </ul>
          <div>
            <div className="d-flex justify-content-between">
                <h4>Coming Up</h4> 
                <hr />
              <div className="col">
                <FaCalendarDays />
                <a className="wd-view-cal" href="">View Calendar</a>
              </div>
            </div>
          </div>
          <ul className="wd-list-calendar list-group">
            <li className="list-group-item"><i className="fa-solid fa-calendar-days"></i>
              <a href=""> Lecture Sep 7 at 11:45am</a></li>
            <li className="list-group-item"><i className="fa-solid fa-calendar-days"></i>
              <a href=""> Lecture Sep 11 at 11:45am</a></li>
            <li className="list-group-item"><i className="fa-solid fa-calendar-days"></i>
              <a href=""> Lecture Sep 11 at 6pm</a></li>
          </ul>
    </div>
  );
}
export default Status;