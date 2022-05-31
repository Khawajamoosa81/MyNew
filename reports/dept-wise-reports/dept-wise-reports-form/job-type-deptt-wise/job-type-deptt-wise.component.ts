import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-job-type-deptt-wise',
  templateUrl: './job-type-deptt-wise.component.html',
  styleUrls: ['./job-type-deptt-wise.component.css']
})
export class JobTypeDepttWiseComponent implements OnInit {

  empCompInf;
  compInfo;
  
  columns: TableData[] = [

    { title: 'Department', value: ['Department', 'name'] },
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'City', value: ['Employee', 'EmpCity', 'name'] },
    { title: 'Grade', value: ['GradeID', 'name'] },
    { title: 'Gender', value: ['Employee', 'Gender'] },
    { title: 'Joining Date', value: 'DateOfJoning' },

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
