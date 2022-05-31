import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-emp-list-for-insurance-misc-reports',
  templateUrl: './emp-list-for-insurance-misc-reports.component.html',
  styleUrls: ['./emp-list-for-insurance-misc-reports.component.css']
})
export class EmpListForInsuranceMiscReportsComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Serial No', value: ''},
    { title: 'State Life No', value: ''},
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name']},
    { title: 'Employee Name', value: ['Employee', 'name'] },
    { title: 'SO/DO/WO', value: ['Employee', 'FatherName'] },
    { title: 'DOB', value: ['Employee', 'DateOfBirth'] },
    { title: 'Age', value: ['Employee', 'DateOfBirth'] },
    { title: 'DOJ', value: 'DateOfJoning' },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Gross Salary', value: '' },
    { title: 'Special Allowance', value: '' },

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
