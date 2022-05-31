import { Store } from '@ngrx/store';
import { selectEmployeeCompanyByCardRange } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { selectAllEmpcompanyinfo, loadEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-padv-ded-ann-leaves-report',
  templateUrl: './padv-ded-ann-leaves-report.component.html',
  styleUrls: ['./padv-ded-ann-leaves-report.component.css']
})
export class PAdvDedAnnLeavesReportComponent implements OnInit {

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

  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Department', value: ['Department', 'name'], sortable:true },
    { title: 'Section', value: '' },
    { title: 'Designation', value: ['Designation', 'name'], sortable: true},
    { title: 'D.O.J', value: 'DateOfJoning' },
    { title: 'Amount Deduction', value: '' },
  
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
