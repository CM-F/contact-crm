import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeForm } from '../../ui/employee-form/employee-form';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee-service';

@Component({
  selector: 'app-add-employee-page',
  imports: [EmployeeForm],
  templateUrl: './add-employee-page.html',
  styleUrl: './add-employee-page.css',
})
export class AddEmployeePage {
  employeeService = inject(EmployeeService);
  router = inject(Router);
  onAddEmployee(employee: Employee){
    this.employeeService.addEmployee(employee);
    this.router.navigate(['/employees'])
  
  }
}
