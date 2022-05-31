import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { Store } from '@ngrx/store';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-in-active-eobi-list-misc-reports',
  templateUrl: './in-active-eobi-list-misc-reports.component.html',
  styleUrls: ['./in-active-eobi-list-misc-reports.component.css']
})
export class InActiveEobiListMiscReportsComponent implements OnInit {

  
  empCompInf;
  compInfo;


  columns: TableData[] = [
  
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'CNIC No', value: ['Employee', 'CNICNO'] },
    { title: 'Old NIC', value: '' },
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'Relationship code', value: '' },
    { title: 'Gender Code', value: ['Employee', 'Gender'] },
    { title: 'DOB', value: ['Employee', 'DateOfBirth'] },
    { title: 'DOJ', value: 'DateOfJoning' },
    { title: 'Address', value: ['Employee', 'EmpCurrentAddress'] },
    { title: 'City', value: ['Employee', 'EmpCity', 'name'] },
    { title: 'Province', value: ['Employee', 'EmpProvince'] },
    { title: 'Mobile No.', value: ['Employee', 'ContactNo'] },

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
