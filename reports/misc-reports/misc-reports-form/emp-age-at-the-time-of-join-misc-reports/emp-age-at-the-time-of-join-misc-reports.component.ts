import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-emp-age-at-the-time-of-join-misc-reports',
  templateUrl: './emp-age-at-the-time-of-join-misc-reports.component.html',
  styleUrls: ['./emp-age-at-the-time-of-join-misc-reports.component.css']
})
export class EmpAgeAtTheTimeOfJoinMiscReportsComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No.', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Department', value: ['Department', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation Name', value: ['Designation', 'name'] },
    { title: 'Gender', value: ['Employee','Gender'] },
    { title: 'DOB', value: ['Employee', 'DateOfBirth'] },
    { title: 'Joining Date', value: 'DateOfJoning' },
    { title: 'Age', value: '' },
    { title: 'Job Duration', value: '' },

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
