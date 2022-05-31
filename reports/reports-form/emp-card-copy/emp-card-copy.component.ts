import { selectAllEmployeecertification } from './../../../../store/employee/employeeCertificatio/employeeCertificatio.selectors';
import { loadEmployeecertification } from './../../../../store/employee/employeeCertificatio/employeeCertificatio.actions';
import { selectAllCard1 } from './../../../../store/employee/card1/card1.selectors';
import { loadcard1 } from 'src/app/features/store/employee/card1';
import { loadEmpcompanyinfo, selectAllEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-emp-card-copy',
  templateUrl: './emp-card-copy.component.html',
  styleUrls: ['./emp-card-copy.component.css']
})
export class EmpCardCopyComponent implements OnInit {

  @Input() cardStart;
  @Input() cardEnd;
  @Input() appointmentSelector;

  empCompInf;
  compInfo;
  emp;
  employee_list;
  cardCopy;
  cardCopy1;
  certificate;
  certificate1;

  constructor(private store:Store<any>) { }

  ngOnInit() {
    if(this.appointmentSelector == true){
      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
      })

      this.store.dispatch(loadcard1());
      this.cardCopy = this.store.select(selectAllCard1);

      this.cardCopy.subscribe(cardC => {
        this.cardCopy1 = cardC;  
        console.log(this.cardCopy1);
            
      })

      this.store.dispatch(loadEmployeecertification());
      this.certificate = this.store.select(selectAllEmployeecertification);
      this.certificate.subscribe(certificateC => {
        this.certificate1 = certificateC;
      })
    }

    else {

      this.store.dispatch(loadEmpcompanyinfo())

      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
      })


      this.store.dispatch(loadcard1());
      this.cardCopy = this.store.select(selectAllCard1);

      this.cardCopy.subscribe(cardC => {
        this.cardCopy1 = cardC;
        console.log(this.cardCopy1);
      })
      
      this.store.dispatch(loadEmployeecertification());
      this.certificate = this.store.select(selectAllEmployeecertification);
      this.certificate.subscribe(certificateC => {
        this.certificate1 = certificateC;
      })
    }
  }

}
