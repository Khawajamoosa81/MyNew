import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-bank-transfer-letter-bonus-reports',
  templateUrl: './bank-transfer-letter-bonus-reports.component.html',
  styleUrls: ['./bank-transfer-letter-bonus-reports.component.css']
})
export class BankTransferLetterBonusReportsComponent implements OnInit {

  empCompInf;
  compInfo;

  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Employee Name', value: ['Employee', 'name'] },
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'Bank AccNo', value: ''},
    { title: 'Amount', value: '' },
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
