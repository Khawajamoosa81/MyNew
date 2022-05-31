import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-emp-list-for-insurance-removal-misc-reports',
  templateUrl: './emp-list-for-insurance-removal-misc-reports.component.html',
  styleUrls: ['./emp-list-for-insurance-removal-misc-reports.component.css']
})
export class EmpListForInsuranceRemovalMiscReportsComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name']},
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'Department', value: ['Department', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Joining Date', value: 'DateOfJoning' },
    { title: 'Termination Date', value: '' },
    { title: 'Age', value: '' },
    { title: 'Basic Salary', value: '' },

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
