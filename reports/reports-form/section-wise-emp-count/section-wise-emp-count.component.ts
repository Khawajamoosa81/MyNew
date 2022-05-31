import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo, loadEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-section-wise-emp-count',
  templateUrl: './section-wise-emp-count.component.html',
  styleUrls: ['./section-wise-emp-count.component.css']
})
export class SectionWiseEmpCountComponent implements OnInit {

  @Input() cardStart;
  @Input() cardEnd;
  empCompInf;
  compInfo;
  @Input() appointmentSelector;

  constructor(private store:Store<any>) { }

  ngOnInit() {

    if(this.appointmentSelector == true){
      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
      })
    }

    else {
      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
        
  
      })
    }

  }

}
