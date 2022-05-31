import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-new-joining-date-wise',
  templateUrl: './new-joining-date-wise.component.html',
  styleUrls: ['./new-joining-date-wise.component.css']
})
export class NewJoiningDateWiseComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Date', value: '' },
    { title: 'Card No', value: '' },
    { title: 'Name', value: '' },
    { title: 'Department', value: '' },
    { title: 'Designation', value: '' },
    { title: 'Status', value: '' },
    { title: 'Emp.Count', value: '' },

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
