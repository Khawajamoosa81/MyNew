import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { TableData } from './../../../../../../shared/custom-tables/table/table.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart-emp-list-deptt-wise',
  templateUrl: './emp-list-deptt-wise.component.html',
  styleUrls: ['./emp-list-deptt-wise.component.css']
})
export class EmpListDepttWiseComponent implements OnInit {

  showReportt;
  stopReport;

  empCompInf: Observable<any>;
  compInfo;


  TotalEmpDeptCount;
  TotalAdminCount;


  columns: TableData[] = [

    { title: 'Department', value: ['Department', 'name'], sortable:true },
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'CNIC No', value: ['Employee', 'CNICNO'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Emp.Category', value: ['EmpCatagory', 'name'] },
    { title: 'Grade', value: ['GradeID', 'name'] },
    { title: 'Gender', value: ['Employee', 'Gender'] },
    { title: 'Date Of Birth', value: ['Employee', 'DateOfBirth'] },
    { title: 'D.O.J', value: 'DateOfJoning' },
  ]

  constructor(private store:Store<any>) { }

  ngOnInit() {
    this.showReportt = true;
    this.stopReport = false;

    this.TotalEmpDeptCount = 0;
    this.TotalAdminCount = 0;

      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {

        
        this.compInfo = val;
        console.log('Employe List', this.compInfo);

        this.compInfo.forEach(comInf => {
          if(comInf.Employee.id && comInf.Department.name === "Information Technology"){
              this.TotalEmpDeptCount = this.TotalEmpDeptCount + 1;
           
          }
          else if(comInf.Employee.id && comInf.Department.name === "Administration") {
            this.TotalAdminCount = this.TotalAdminCount + 1;
          }

          console.log(comInf.Section.name);

        })

        console.log(this.TotalEmpDeptCount);
        console.log(this.TotalAdminCount);

      })

    
  }

  
  EmpRecord(){
    this.showReportt = false;
    this.stopReport = true;
  }

  onEditDetails(event){

  }

  ondelete(event){

  }

  onEdit(event){

  }

  printCardCopyBack(event){

  }


  selectAllEmpcompanyinfo;
  selectCurrentEmpcompanyinf;



}
