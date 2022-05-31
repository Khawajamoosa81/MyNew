import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-tax-deduction-allow-and-ded',
  templateUrl: './tax-deduction-allow-and-ded.component.html',
  styleUrls: ['./tax-deduction-allow-and-ded.component.css']
})
export class TaxDeductionAllowAndDedComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Grade', value: ['GradeID', 'name'] },
    { title: 'D.O.J', value: 'DateOfJoning' },
    { title: 'NIC', value: '' },
    { title: 'Tax Deduction', value: '' },

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
