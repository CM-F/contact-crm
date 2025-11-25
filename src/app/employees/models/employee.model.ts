import { Level } from "./level.model"
import { Department } from "./department.model"

export interface Employee {
   _id: string;
    name: string;
    department: Department;
    level: Level;
}