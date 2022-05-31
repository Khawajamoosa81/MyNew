import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-pessi-contrib-m-misc-reports',
  templateUrl: './pessi-contrib-m-misc-reports.component.html',
  styleUrls: ['./pessi-contrib-m-misc-reports.component.css']
})
export class PessiContribMMiscReportsComponent implements OnInit {

  
  empCompInf;
  compInfo;


  columns: TableData[] = [
  
    { title: 'Serial No', value: ''},
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name']},
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'CNIC No', value: ['Employee', 'CNICNO'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'DOB', value: ['Employee', 'DateOfBirth'] },
    { title: 'DOJ', value: 'DateOfJoning' },
    { title: 'DOT', value: '' },
    { title: 'SSC No', value: 'SSCNO' },
    { title: 'Unpaid Leave', value: '' },
    { title: 'Total Absents', value: '' },
    { title: 'Total Att.Days', value: '' },
    { title: 'Gross Salary', value: '' },
    { title: 'Cont', value: '' },


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
