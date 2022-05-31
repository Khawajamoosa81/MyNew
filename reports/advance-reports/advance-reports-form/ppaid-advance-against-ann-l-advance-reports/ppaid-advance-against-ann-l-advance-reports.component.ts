import { Store } from '@ngrx/store';
import { loadEmpcompanyinfo, selectAllEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-ppaid-advance-against-ann-l-advance-reports',
  templateUrl: './ppaid-advance-against-ann-l-advance-reports.component.html',
  styleUrls: ['./ppaid-advance-against-ann-l-advance-reports.component.css']
})
export class PPaidAdvanceAgainstAnnLAdvanceReportsComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Department', value: ['Department', 'name'], sortable: true},
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Transaction Date', value: '' },
    { title: 'Paym Against Auu.leave', value: '' },
    { title: 'Emp.Status', value: 'EmpStatus' },

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
