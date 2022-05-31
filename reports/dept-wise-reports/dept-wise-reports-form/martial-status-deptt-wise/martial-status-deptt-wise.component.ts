import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-martial-status-deptt-wise',
  templateUrl: './martial-status-deptt-wise.component.html',
  styleUrls: ['./martial-status-deptt-wise.component.css']
})
export class MartialStatusDepttWiseComponent implements OnInit {


  empCompInf;
  compInfo;
  
  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Gender', value: ['Employee', 'Gender'] },
    { title: 'Joining Date', value: 'DateOfJoning' },
    { title: 'Date Of Birth', value: ['Employee', 'DateOfBirth'] },

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
