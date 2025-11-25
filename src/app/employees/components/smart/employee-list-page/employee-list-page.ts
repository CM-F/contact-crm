import { Component, inject} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee-service';
import { EmployeeComponent } from '../../ui/employee-component/employee-component';
import { EmployeeListComponent } from '../../ui/employee-list-component/employee-list-component';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeListComponent, EmployeeComponent, RouterLink],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.css',
})
export class EmployeeListPage {

  employees: Employee[] = [];
  
  currentEmployee: null | Employee = null;
  
  employeeService = inject(EmployeeService);
  router = inject(Router)
  
  constructor(){
    this.employees = this.employeeService.getEmployees();
  }

  showDetails(employeeId: string) {
    this.currentEmployee = this.employeeService.getEmployeeById(employeeId);
  }

  onEdit(employeeId: string) {
    // console.log(employeeId);
    this.router.navigate(["employees/edit", employeeId])
  }

  onDelete(employeeId: string) {
    this.currentEmployee = null;
    this.employeeService.deleteEmployeeById(employeeId);
    this.employees = this.employeeService.getEmployees();
    // this.employees = this.employees.filter((employee) => employee._id !== employeeId)
  }
}
