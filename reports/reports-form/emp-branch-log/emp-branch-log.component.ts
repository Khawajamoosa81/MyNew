import { loadEmpcompanyinfo, selectAllEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-emp-branch-log',
  templateUrl: './emp-branch-log.component.html',
  styleUrls: ['./emp-branch-log.component.css']
})
export class EmpBranchLogComponent implements OnInit {
  
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
