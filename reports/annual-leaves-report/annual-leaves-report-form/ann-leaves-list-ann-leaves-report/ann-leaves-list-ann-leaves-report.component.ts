import { Store } from '@ngrx/store';
import { selectEmployeeCompanyByCardRange } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { selectAllEmpcompanyinfo, loadEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-ann-leaves-list-ann-leaves-report',
  templateUrl: './ann-leaves-list-ann-leaves-report.component.html',
  styleUrls: ['./ann-leaves-list-ann-leaves-report.component.css']
})
export class AnnLeavesListAnnLeavesReportComponent implements OnInit {

  @Input() cardStart;
  @Input() cardEnd;
  empCompInf;
  slides;
  slideIndex;
  compInfo: Observable<any>;
  @Input() appointmentSelector;
  dots;
  s;
  arrows;


  // {{e.Employee.EmpCardNo.name}}
  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Grade', value: ['GradeID', 'name'] },
    { title: 'Department', value: ['Department', 'name'], sortable:true },
    { title: 'D.O.J', value: 'DateOfJoning' },
    { title: 'Payment Date', value: '' },
    { title: 'Pay Days', value: '' },
    { title: 'Due Amount', value: '' },
    { title: 'Ded Against', value: '' },
    { title: 'P Adv.', value: '' },
    { title: 'Net Payable', value: '' },
    { title: 'Employee Signature', value: '' },

  ]


  constructor(private store:Store<any>) { }

  ngOnInit() {

    if(this.appointmentSelector = true){

      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
        console.log("Employee List Data", this.compInfo);
      })
    }

    else {
      this.store.dispatch(loadEmpcompanyinfo())

      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
        
  
      })
    }

  }

}
