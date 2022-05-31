import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo, selectAllEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-emp-ex-letter',
  templateUrl: './emp-ex-letter.component.html',
  styleUrls: ['./emp-ex-letter.component.css']
})
export class EmpExLetterComponent implements OnInit {
  
  @Input() cardStart
  @Input() cardEnd
  emp;
  employee_list:any;
  @Input() fromCard;
  empCompInf:any;
  compInfo:any;
  @Input() appointmentSelector;
  
  today = new Date();
  date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();

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
