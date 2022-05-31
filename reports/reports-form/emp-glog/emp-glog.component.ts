import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo, selectAllEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { loadEmployee, selectAllEmployee } from 'src/app/features/store/employee/employe';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-emp-glog',
  templateUrl: './emp-glog.component.html',
  styleUrls: ['./emp-glog.component.css']
})
export class EmpGLogComponent implements OnInit {

  @Input() cardStart
  @Input() cardEnd
  emp;
  employee_list:any;
  @Input() fromCard;
  empCompInf:any;
  compInfo:any;
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
