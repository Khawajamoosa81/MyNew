import { selectAllEmployeesalarycombined } from './../../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.selectors';
import { loadEmployeesalarycombined } from './../../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.actions';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { Store } from '@ngrx/store';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-grade-deptt-wise',
  templateUrl: './grade-deptt-wise.component.html',
  styleUrls: ['./grade-deptt-wise.component.css']
})
export class GradeDepttWiseComponent implements OnInit {


  empCompInf;
  compInfo;
  dept;
  empsal;
  empSalar;

  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Joining Date', value: 'DateOfJoning' },
    { title: 'Salary', value: 'BasicSalary' },
  ]


  constructor(private store:Store<any>) { }

  ngOnInit() {

    
    this.store.dispatch(loadEmpcompanyinfo())
    this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
    this.empCompInf.subscribe(val => {
      this.compInfo = val;
      console.log("Employee List Data", this.compInfo);
    })


    this.store.dispatch(loadEmployeesalarycombined());

    this.empsal = this.store.select(selectAllEmployeesalarycombined);

    this.empsal.subscribe(emp => {
      this.empSalar = emp;
      console.log(this.empSalar);
    })
    
    

  }

}
