import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-notices-date-wise',
  templateUrl: './notices-date-wise.component.html',
  styleUrls: ['./notices-date-wise.component.css']
})
export class NoticesDateWiseComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No', value: '' },
    { title: 'Name', value: '' },
    { title: 'Section', value: '' },
    { title: 'Designation', value: '' },
    { title: 'Notice No', value: ''},
    { title: 'Issue Date', value: '' },
    { title: 'Notice Type', value: '' },
    { title: 'Reason', value: '' },
    { title: 'Description', value: '' },

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
