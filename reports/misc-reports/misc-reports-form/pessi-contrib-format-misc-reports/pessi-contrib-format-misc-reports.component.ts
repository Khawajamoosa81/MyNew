import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-pessi-contrib-format-misc-reports',
  templateUrl: './pessi-contrib-format-misc-reports.component.html',
  styleUrls: ['./pessi-contrib-format-misc-reports.component.css']
})
export class PessiContribFormatMiscReportsComponent implements OnInit {

    
  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Employee_Full_Name', value: ['Employee', 'name'] },
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'CNIC No', value: ['Employee', 'CNICNO'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Employee_Type', value: 'EmployeeType' },
    { title: 'Skill_Level', value: '' },
    { title: 'Employee Salary (Daily/Mothly)', value: '' },
    { title: 'Working Days', value: 'SSCNO' },
    { title: 'Salary_To_Pay_Contribution', value: '' },
    { title: 'Is_Emp_Separated', value: '' },
    { title: 'Contact No', value: ['Employee', 'ContactNo'] },
    { title: 'Gender', value: ['Employee', 'Gender'] },


  ]

  constructor(private store:Store<any>) { }

  ngOnInit() {

    this.store.dispatch(loadEmpcompanyinfo())
    this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
    this.empCompInf.subscribe(val => {
      this.compInfo = val;
      console.log("Employee List Data", this.compInfo);
    })

  }

}
