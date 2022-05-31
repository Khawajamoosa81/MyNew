import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-blood-group-deptt-wise',
  templateUrl: './blood-group-deptt-wise.component.html',
  styleUrls: ['./blood-group-deptt-wise.component.css']
})
export class BloodGroupDepttWiseComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Blood Group', value: ['Employee', 'BloodGroup'], sortable: true},
    { title: 'Department', value: ['Department', 'name'], sortable: true},
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
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
