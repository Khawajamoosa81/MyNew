import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-emp-category-deptt-wise',
  templateUrl: './emp-category-deptt-wise.component.html',
  styleUrls: ['./emp-category-deptt-wise.component.css']
})
export class EmpCategoryDepttWiseComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Department', value: ['Department', 'name'], sortable: true},
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Grade', value: ['GradeID', 'name'], sortable: true},
    { title: 'Gender', value: ['Employee', 'Gender'] },

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
