import { selectAllEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.selectors';
import { loadEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.actions';
import { loadQualification, selectAllQualification } from 'src/app/features/store/hrms/qualificatio';
import { selectEmployeeCompanyByCardRange, allEmpcompanyinfLoaded } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo, selectAllEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-emp-appoint',
  templateUrl: './emp-appoint.component.html',
  styleUrls: ['./emp-appoint.component.css']
})
export class EmpAppointComponent implements OnInit {

  emp:any;
  employee_list:any;
  @Input() cardStart;
  @Input() cardEnd;
  @Input() appointmentSelector;

  empCompInf:any;
  compInfo:any;
  emp_list;
  EmployeeList;
  empQual;
  empQualification;
  salCombined;
  salaryCombined

  constructor(private  store:Store<any>) { }

  ngOnInit() {

    this.store.dispatch(loadQualification());
    this.store.dispatch(loadEmpcompanyinfo());
    this.store.dispatch(loadEmployeesalarycombined());


    if(this.appointmentSelector == true){
      this.store.dispatch(loadQualification());

      this.empQual = this.store.select(selectAllQualification);

      this.empQual.subscribe(qualification =>{
        this.empQualification = qualification;
        console.log(this.empQualification);
        

      })
    

      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
      })

      this.salCombined = this.store.select(selectAllEmployeesalarycombined);

      this.salCombined.subscribe((salCom) => {
        this.salaryCombined = salCom;
      })

    }

    else {
      this.empQual = this.store.select(selectAllQualification);

      this.empQual.subscribe(qualification =>{
        this.empQualification = qualification;
        console.log(this.empQualification);

      })

      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
        
  
      })

      this.salCombined = this.store.select(selectAllEmployeesalarycombined);

      this.salCombined.subscribe((salCom) => {
        this.salaryCombined = salCom;
      })
    }
  
  }

}
