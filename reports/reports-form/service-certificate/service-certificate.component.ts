import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { Store } from '@ngrx/store';
import { loadEmpcompanyinfo, selectAllEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-service-certificate',
  templateUrl: './service-certificate.component.html',
  styleUrls: ['./service-certificate.component.css']
})
export class ServiceCertificateComponent implements OnInit {

  empCompInf;
  compInfo;
  @Input() cardStart;
  @Input() cardEnd;
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
