import { Component, inject } from '@angular/core';
import { map } from 'rxjs'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Employee } from '../../../models/employee.model';
import { EmployeeForm } from '../../ui/employee-form/employee-form';

@Component({
  selector: 'app-employee-edit-page',
  imports: [EmployeeForm],
  templateUrl: './employee-edit-page.html',
  styleUrl: './employee-edit-page.css',
})
export class EmployeeEditPage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  employeeService = inject(EmployeeService);
  employee: Employee | null = null;

  onEditEmployee(employee: Employee){
    this.employeeService.editEmployee(employee);
    this.router.navigate(["/employees"]);
  }  

  constructor(){

    // non reactive way with snapshot
    // const employeeId = this.route.snapshot.params['empId'];
    // this.employee = this.employeeService.getEmployeeById(employeeId);

    // reactive way
    this.route.params
    .pipe(map((params) => {
      const employeeId = params['empId'];
      return this.employeeService.getEmployeeById(employeeId);
    }),
    takeUntilDestroyed()
  )
  .subscribe(
    {next: (employee) => {
    this.employee = employee;
  },
  error: (err) => {
    this.employee = null;
  },
  });
  }
}
