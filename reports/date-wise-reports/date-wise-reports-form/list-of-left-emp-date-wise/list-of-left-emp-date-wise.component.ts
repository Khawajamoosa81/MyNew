import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-list-of-left-emp-date-wise',
  templateUrl: './list-of-left-emp-date-wise.component.html',
  styleUrls: ['./list-of-left-emp-date-wise.component.css']
})
export class ListOfLeftEmpDateWiseComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Department', value: ['Department', 'name'], sortable: true},
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Gender', value: ['Employee', 'Gender'] },
    { title: 'Due Salary', value: '' },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Due Bonus', value: ''},
    { title: 'Due Graduity', value: '' },
    { title: 'P.Adv', value: 0 },
    { title: 'T.Adv', value: 0 },
    { title: 'Canteen Deduction', value: 0 },
    { title: 'Annual Leave Amt', value: 11337 },
    { title: 'Excess Leave Amt', value: 0 },
    { title: 'Notes Pay Status', value: 'Do nothing' },
    { title: 'Due OT', value: 0 },
    { title: 'Grand Total', value: 85745 },
    { title: 'D.O.J', value: 'DateOfJoning' },
    { title: 'D.O.L', value: '' },
    { title: 'Leaving Reason', value: '' },

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
