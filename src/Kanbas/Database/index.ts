import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";

export type CourseType = {
    _id: string,
    name: string,
    number: string,
    startDate: string,
    endDate: string, 
    image: string
}

export type ModuleType = {
    _id: string,
    name: string,
    description: string,
    module: string
}

export type ModuleList = {
    _id: string,
    name: string,
    course: string,
    description: string,
    lesson: ModuleType[]
}

export interface DB {
    courses: CourseType[];
    modules: object;
    assignments: object;
}

const db:DB = {
    courses: courses,
    modules: modules,
    assignments: assignments
}

export default db;

export { courses, modules, assignments };