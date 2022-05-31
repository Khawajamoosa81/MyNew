import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-annual-leaves-due-for-selected-m-misc-reports',
  templateUrl: './annual-leaves-due-for-selected-m-misc-reports.component.html',
  styleUrls: ['./annual-leaves-due-for-selected-m-misc-reports.component.css']
})
export class AnnualLeavesDueForSelectedMMiscReportsComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name']},
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Department', value: ['Department', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Job Type', value: ['JobType', 'name'] },
    { title: 'DOJ', value: 'DateOfJoning' },
    { title: 'DOP', value: 'DateOfPermanent' },
    { title: 'Duration', value: '' },
    { title: 'Due Amount', value: '' },

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
