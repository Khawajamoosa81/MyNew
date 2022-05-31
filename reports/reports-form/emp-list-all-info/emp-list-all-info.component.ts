import { TableData } from './../../../../../shared/custom-tables/table/table.component';
import { loadCompanys, selectAllCompanys } from 'src/app/features/store/settings/company';
import { selectAllAnnualleavetransactions } from './../../../../store/account/annualLeaveTransaction/annualLeaveTransaction.selectors';
import { loadAnnualleavetransactions } from './../../../../store/account/annualLeaveTransaction/annualLeaveTransaction.actions';
import { selectAllEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.selectors';
import { loadEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.actions';
import { loadQualification, selectAllQualification } from 'src/app/features/store/hrms/qualificatio';
import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo, loadEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'smart-emp-list-all-info',
  templateUrl: './emp-list-all-info.component.html',
  styleUrls: ['./emp-list-all-info.component.css']
})
export class EmpListAllInfoComponent implements OnInit {

  
  @Input() cardStart
  @Input() cardEnd
  emp;
  employee_list:any;
  @Input() fromCard;
  empCompInf:any;
  compInfo:any;
  @Input() appointmentSelector;
  empQual;
  employeeQual;
  salCombined;
  salaryCombined;
  annualLeav;
  annLeave;
  allEmp;
  allEmployees;




  
  columns: TableData[] = [
  
    { title: 'Card No', value: ['Employee', 'EmpCardNo', 'name'] },
    { title: 'Name', value: ['Employee', 'name'] },
    { title: 'Father Name', value: ['Employee', 'FatherName'] },
    { title: 'Mother Name', value: ['Employee', 'MotherName'] },
    { title: 'Department', value: ['Department', 'name'] },
    { title: 'Section', value: ['Section', 'name'] },
    { title: 'Designation', value: ['Designation', 'name'] },
    { title: 'Employee Experience', value: ['Employee', 'Gender'] },
    { title: 'CNIC No.', value: ['Employee', 'CNICNO'] },
    { title: 'Present Address', value: ['Department', 'HODName', 'EmpCurrentAddress'] },
    { title: 'Current City', value: ['Employee', 'EmpCity', 'name'] },
    { title: 'Gender', value: ['Employee', 'Gender'] },
    { title: 'Qualification', value: 'DateOfJoning' },
    { title: 'Grade', value: 'DateOfJoning' },
    { title: 'Basic Salary', value: 'DateOfJoning' },
    { title: 'Sepcial Allowance', value: 'DateOfJoning' },
    { title: 'Condition Allowance', value: 'DateOfJoning' },
    { title: 'Pay', value: 'DateOfJoning' },
    { title: 'SSC No.', value: 'DateOfJoning' },
    { title: 'EOBI No.', value: 'DateOfJoning' },
    { title: 'DOB', value: 'DateOfJoning' },
    { title: 'Joinging Date', value: 'DateOfJoning' },
    { title: 'Per', value: 'DateOfJoning' },
    { title: 'Age', value: 'DateOfJoning' },
    { title: 'RFID', value: 'DateOfJoning' },



  ]

  
  constructor(private store:Store<any>) { }

  ngOnInit() {

    if(this.appointmentSelector == true){

      this.store.dispatch(loadQualification());

      this.empQual = this.store.select(selectAllQualification);

      this.empQual.subscribe(empQual => {
        this.employeeQual = empQual;
        console.log(this.employeeQual);      
      })

      this.store.dispatch(loadEmpcompanyinfo());

      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
      })

      
    this.store.dispatch(loadEmployeesalarycombined());
    this.salCombined = this.store.select(selectAllEmployeesalarycombined);

    this.salCombined.subscribe(salCombined => {
      this.salaryCombined = salCombined;
      console.log(this.salaryCombined); 
    })

    this.store.dispatch(loadAnnualleavetransactions());
    this.annualLeav = this.store.select(selectAllAnnualleavetransactions)

    this.annualLeav.subscribe(annL => {
      this.annLeave = annL;
      console.log('Annual Leave',this.annLeave);

    })

    this.store.dispatch(loadCompanys());
    this.allEmp = this.store.select(selectAllCompanys);

    this.allEmp.subscribe(allEmp => {
      this.allEmployees = allEmp;
      console.log('All Employees Data',this.allEmployees);
    })
    }

    else {

      this.store.dispatch(loadQualification());

      this.empQual = this.store.select(selectAllQualification);

      this.empQual.subscribe(empQual => {
        this.employeeQual = empQual;
        console.log(this.employeeQual);      
      })
      

      this.store.dispatch(loadEmpcompanyinfo());

      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
      })

      this.store.dispatch(loadEmployeesalarycombined());
      this.salCombined = this.store.select(selectAllEmployeesalarycombined);
  
      this.salCombined.subscribe(salCombined => {
        this.salaryCombined = salCombined;
        console.log(this.salaryCombined); 
      })

      this.store.dispatch(loadAnnualleavetransactions());
      this.annualLeav = this.store.select(selectAllAnnualleavetransactions)
  
      this.annualLeav.subscribe(annL => {
        this.annLeave = annL;
        console.log('Annual Leave',this.annLeave);
      })


      this.store.dispatch(loadCompanys());
      this.allEmp = this.store.select(selectAllCompanys);
  
      this.allEmp.subscribe(allEmp => {
        this.allEmployees = allEmp;
        console.log('All Employees Data',this.allEmployees);
      })
    }

  }
  


  // dataTable(){
  //   document.getElementById('#table1').DataTable();
  // }

//   $(document).ready(function () {
//     $('#table1').DataTable();
// });


}
