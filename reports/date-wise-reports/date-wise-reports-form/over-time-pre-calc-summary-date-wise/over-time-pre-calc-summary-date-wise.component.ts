import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-over-time-pre-calc-summary-date-wise',
  templateUrl: './over-time-pre-calc-summary-date-wise.component.html',
  styleUrls: ['./over-time-pre-calc-summary-date-wise.component.css']
})
export class OverTimePreCalcSummaryDateWiseComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Date', value: '' },
    { title: 'Dept Name', value: ['Department', 'name'] },
    { title: 'Section Name', value: ['Section', 'name'] },
    { title: 'Emp.Count', value: '' },
    { title: 'Normal', value: '' },
    { title: 'Extra', value: '' },
    { title: 'Special', value: '' },
    { title: 'Total Hours', value: '' },
    { title: 'Total Amount', value: '' },

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
