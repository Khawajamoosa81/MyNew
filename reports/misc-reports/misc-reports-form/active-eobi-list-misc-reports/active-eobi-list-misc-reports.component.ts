import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-active-eobi-list-misc-reports',
  templateUrl: './active-eobi-list-misc-reports.component.html',
  styleUrls: ['./active-eobi-list-misc-reports.component.css']
})
export class ActiveEobiListMiscReportsComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No.', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Department', value: ['Department', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation Name', value: ['Designation', 'name'] },
    { title: 'EOBI', value: 'EOBINO' },

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
