import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-card-expiry-date-wise',
  templateUrl: './card-expiry-date-wise.component.html',
  styleUrls: ['./card-expiry-date-wise.component.css']
})
export class CardExpiryDateWiseComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Department', value: ['Department', 'name'], sortable: true},
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Grade', value: ['GradeID', 'name'], sortable: true},
    { title: 'Job Type', value: ['JobType', 'name'] },
    { title: 'Date Of joinging', value: 'DateOfJoning' },
    { title: 'Expiry Date', value: ['Employee', 'CNINExpiryDate'] },

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
