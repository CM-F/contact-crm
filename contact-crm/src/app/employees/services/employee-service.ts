import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  private employees: Employee[] = [
      {
      "_id": "6753ed506",
      "name": "Salvador Alende",
      "department": "IT",
      "level": "J"
    },
    {
      "_id": "6753ed507",
      "name": "Henri Kanté",
      "department": "HR",
      "level": "M"
    },
    {
      "_id": "6753ed508",
      "name": "Willie Denzai",
      "department": "Marketing",
      "level": "S"
    },
    {
      "_id": "6753ed509",
      "name": "Henri Fonda",
      "department": "HR",
      "level": "J"
    }
    ]
    constructor(){}

    getEmployeeById(id: string) {
      return this.employees.find(employee => employee._id === id) || null;
    };

    deleteEmployeeById(id: string) {
      return this.employees = this.employees.filter((employee) => employee._id !== id)
    };

    getEmployees() {
      return this.employees;
    };

    addEmployee(employee: Employee){
      const _id = crypto.randomUUID();
      this.employees = [...this.employees, {...employee, _id}];
    }

    editEmployee(employee: Employee){
      const { _id } = employee;
      const index = this.employees.findIndex(employee => employee._id === _id);

      if(index !== -1) {
        const part1 = this.employees.slice(0, index)
        const part2 = this.employees.slice(index + 1);
        const employees = part1.concat(employee).concat(part2);
        this.employees = employees;
      }
    }
}
