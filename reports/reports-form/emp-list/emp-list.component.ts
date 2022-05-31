import { Observable } from 'rxjs';
import { selectAllEmpcompanyinfo, loadEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmployee, selectAllEmployee } from 'src/app/features/store/employee/employe';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'smart-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

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
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'CNIC No', value: ['Employee', 'CNICNO'] },
    { title: 'Department', value: ['Department', 'name'], sortable:true },
    { title: 'Designation', value: ['Designation', 'name'], sortable: true},
    { title: 'Emp.Category', value: ['EmpCatagory', 'name'] },
    { title: 'Grade', value: ['GradeID', 'name'] },
    { title: 'Gender', value: ['Employee', 'name'] },
    { title: 'Date Of Birth', value: ['Employee', 'DateOfBirth'] },
    { title: 'D.O.J', value: 'DateOfJoning' },
  ]


  constructor(private route:ActivatedRoute, private router:Router, private location:Location, private store:Store<any>) { }

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

  onEditDetails(event){

  }

  ondelete(event){

  }

  onEdit(event){

  }

  printCardCopyBack(event){

  }

}
