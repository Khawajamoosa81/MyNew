import { selectAllEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.selectors';
import { loadEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.actions';
import { selectAllEmpcompanyinfo, loadEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-termination-letter',
  templateUrl: './termination-letter.component.html',
  styleUrls: ['./termination-letter.component.css']
})
export class TerminationLetterComponent implements OnInit {

  @Input() cardStart;
  @Input() cardEnd;
  empCompInf;
  compInfo;
  @Input() appointmentSelector;
  empSal;
  empSalary;

  constructor(private store:Store<any>) { }

  ngOnInit() {
    if(this.appointmentSelector == true){
      
      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
      })

      this.store.dispatch(loadEmployeesalarycombined());

      this.empSal = this.store.select(selectAllEmployeesalarycombined)
      
      this.empSal.subscribe(empSal => {
        this.empSalary = empSal;
        console.log(this.empSalary);
      })

      this.compInfo.concate(this.empSalary);

    }

    else {
      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
        
      })

      this.store.dispatch(loadEmployeesalarycombined());

      this.empSal = this.store.select(selectAllEmployeesalarycombined)
      
      this.empSal.subscribe(empSal => {
        this.empSalary = empSal;
        console.log(this.empSalary);
      })
    }
  }

}
