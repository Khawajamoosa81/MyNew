import { selectAllEmployeesalarycombined } from './../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.selectors';
import { loadEmployeesalarycombined } from './../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.actions';
import { loadQualification, selectAllQualification } from 'src/app/features/store/hrms/qualificatio';
import { APP_CONFIG } from './../../../../app.config';
import { selectAllCompanybranches } from 'src/app/features/store/hrms/companybranche';
import { selectAllEmpcompanyinfo, selectEmployeeCompanyByCardRange } from './../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { selectAllDesginations } from './../../../store/hrms/desgination/desgination.selectors';
import { loadDesginations } from './../../../store/hrms/desgination/desgination.actions';
import { selectAllSections } from './../../../store/hrms/section/section.selectors';
import { loadSections } from './../../../store/hrms/section/section.actions';
import { loadDepartmentssections } from './../../../store/hrms/departmentssection/departmentssection.actions';
import { selectAllDepartmentssections } from './../../../store/hrms/departmentssection/departmentssection.selectors';
import { loadCompanybranches } from './../../../store/hrms/companybranche/companybranche.actions';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { selectAllEmployee, loadEmployee, Employe } from 'src/app/features/store/employee/employe';

@Component({
  selector: 'smart-reports-form',
  templateUrl: './reports-form.component.html',
  styleUrls: ['./reports-form.component.css']
})
export class ReportsFormComponent implements OnInit {

  
  @Input() cardStart;
  @Input() cardEnd;
  empCompInf;
  compInfo;
  @Input() appointmentSelector;

  cardStartValue;
  cardEndValue;
  type: boolean;
  all;
  allData;
  active;
  non_active;
  buttonStatus;
  reportStatus;
  cardStatus;
  id;
  employeeProfile;
  emp: Observable<Employe[]>;
  scertificate;
  emp_list;
  tit;
  empSalLog;
  empTracking;
  empGLog;
  empAppoint;
  empcardcopy;
  cardPrinting;
  empCCertificate;
  empDepLog;
  empExLetter;
  selectedBox;
  selectBoxOS;
  empGdLog;
  empShLog;
  empLAllInfo;
  empJobTypeLog;
  secWiseEmpCount;
  empBranchLog;
  terminationLetter;
  notices;
  disbaleEmpList;
  jobPermanentLetter;
  marriageGrantCase;
  deathGrantCase;
  servicesCertificate;
  opetionSelectorAll;
  operationSelectorByCard;
  selectedActiveBox;
  specialCardFilter;
  specialGradeFilter;
  byBranch;
  frontSide;
  backSide;
  selectCardPrintingBox;
  selectedBoxAO;
  AllOA;
  departmentAO;
  card;
  card2;
  selectByCardRange;
  employee:any;
  empId: Observable<Employe[]>;
  branch: any;
  branches;
  depSection;
  dept;
  sec;
  secCode;
  designation;
  designations;
  empCompIno;
  compInf;
  comp;
  slideIndex:any;
  i;
  slides;
  dots;
  s;
  d;
  arrows;
  empPic;
  myslide;
  deptAO;
  buttons;
  empQual;
  employeQual;
  salCombined;
  salaryCombined;
  selectDate;
  selectedBoxDate;
  selectedDeptOp;
  designAO;
  sectionAO;


  isChecked;


  empProfile;





  currSlide;



  constructor(private route:ActivatedRoute, private router:Router, private location:Location, private store:Store<any>){
  

  }


  ngOnInit() {

    // if(this.appointmentSelector == true){
    //   this.store.dispatch(loadEmpcompanyinfo())
    //   this.compInf = this.store.select(selectAllEmpcompanyinfo);
    //   this.empCompInf.subscribe(val => {
    //     this.compInfo = val;
    //   })
    // }

    // else {
    //   this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

    //   this.empCompInf.subscribe(compInf => {
    //     this.compInfo = compInf;
        
  
    //   })
    // }
    

    


    this.store.dispatch(loadEmployeesalarycombined());
    this.salCombined = this.store.select(selectAllEmployeesalarycombined);

    this.salCombined.subscribe(salCombined => {
      this.salaryCombined = salCombined;
      this.salaryCombined
    })


    this.store.dispatch(loadQualification());
    this.empQual = this.store.select(selectAllQualification);

    this.empQual.subscribe(q => {
      this.employeQual = q;
      console.log(q);
      
    })

    this.cardStartValue = 0;
    this.cardEndValue = 0;
    this.store.dispatch(loadEmployee());
    this.emp = this.store.select(selectAllEmployee);

    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      
    })

    
    // this.emp = this.store.select(selectByEmployeeId, { id: parseInt(this.id) });

    this.emp.subscribe(val => {
      this.employee = val;
    })

    this.store.dispatch(loadDepartmentssections())
    this.depSection = this.store.select(selectAllDepartmentssections)

    this.depSection.subscribe(dept => {
      this.dept = dept;

      
    })


    this.store.dispatch(loadSections())
    this.sec = this.store.select(selectAllSections)

    this.sec.subscribe(sec => {
      this.secCode = sec;
    })

    this.store.dispatch(loadDesginations())

    this.designation = this.store.select(selectAllDesginations)
    
    this.designation.subscribe(design => {
      this.designations = design;
      
    })


    this.store.dispatch(loadCompanybranches());

    this.branch = this.store.select(selectAllCompanybranches);

    this.branch.subscribe(branch => {
      this.branches = branch;
      this.branches;
      
    })



    this.store.dispatch(loadEmpcompanyinfo())

    this.comp = this.store.select(selectAllEmpcompanyinfo)

    this.comp.subscribe(val => {
      val;
      
    })



    this.buttonStatus = true;
    this.reportStatus = true;
    this.cardStatus = false;
    this.all = true;
    this.allData = false;
    this.scertificate = false;
    this.tit = false;
    this.emp_list = false;
    this.empSalLog = false;
    this.empTracking = false;
    this.empGLog = false;
    this.empAppoint = false;
    this.empcardcopy = false;
    this.cardPrinting = false;
    this.empCCertificate = false;
    this.empDepLog = false;
    this.empExLetter = false;
    this.empGdLog = false;
    this.empShLog = false;
    this.empLAllInfo = false;
    this.empJobTypeLog = false;
    this.secWiseEmpCount = false;
    this.empBranchLog = false;
    this.terminationLetter = false;
    this.notices = false;
    this.disbaleEmpList = false;
    this.jobPermanentLetter = false;
    this.marriageGrantCase = false;
    this.deathGrantCase = false;
    this.servicesCertificate = false;

    this.opetionSelectorAll = true;
    
    this.selectedActiveBox = false;
    this.operationSelectorByCard = false;
    this.specialCardFilter = false;
    this.specialGradeFilter = false;
    this.byBranch = false;
    this.frontSide = false;
    this.backSide = false;
    this.selectCardPrintingBox = false;
    this.selectedBoxAO = false;
    this.AllOA = true;
    this.departmentAO = false;
    this.slideIndex = 1;
    this.arrows = false;
    this.empPic = APP_CONFIG.EMP_URL;
    this.myslide = false;
    this.deptAO = false;
    this.buttons = true;
    this.employeeProfile = true;
    this.selectDate = false;
    this.selectedDeptOp = false;
    this.designAO = false;
    this.sectionAO = false;
    
    this.arrows = false;
    
    this.empProfile = true;

    this.isChecked = true;

  }

  

  handleAll(event){

    this.selectedActiveBox = event.target.value;

    if(this.all = true){
      this.selectedActiveBox = this.all;
      this.emp_list = false;
      this.non_active = false;
      this.active = true;

      console.log(this.all);
    }

    else {
      this.all = false;
      console.log(this.all);
    }
    
  }

  handleActive(event){
    this.selectedBox = event.target.value;
    if(this.active = true){
      this.selectedBox = this.active;
      this.emp_list = false;
      this.non_active = false;
      this.all = true;
      this.empSalLog = false;
      
      console.log(this.active);
    }    
    else {
      this.active = false;
      console.log(this.active);
      
    }
  }

  handleNonActive(event){
    this.non_active = true;
    this.selectedBox = event.target.value;
    if(this.non_active = true){
      this.selectedBox = this.non_active;
      this.emp_list = false;
      this.active = false;
      this.all = false;

    }

    else {
      this.non_active = false;
      console.log(this.non_active);
      
    }
    
  }

  showCard(fromCard,toCard){


    this.arrows = true;

    // if(this.employeeProfile == true){
    //   this.buttons = true;
    // }

    if(this.opetionSelectorAll === false) {
      
      this.store.dispatch(loadEmpcompanyinfo())

      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:fromCard,endCard:toCard})
      
      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;

    })
    }

    else {
      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
      })
    }

    

    // this.emp = this.store.select(selectEmployeeByCardRange,{startCard:fromCard,endCard:toCard})
    // this.emp.subscribe(val => {
    //   this.employee = val;
    //   console.log(this.employee);
    // })
    this.reportStatus = false;

    this.buttonStatus = true;
    this.cardStatus = true;

    
  }

  EmpRecord(){
    this.cardStatus = false;
    this.reportStatus = true;
    this.buttonStatus = false;
    this.scertificate = false;
    this.emp_list = false;
    this.arrows = false;
  }

  handleEmpProfile(event){

    this.selectedBox = event.target.value;
    if(this.employeeProfile = true){
      this.selectedBox = this.employeeProfile;
      this.empTracking = false;
      this.scertificate = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.empGLog = false;
      this.selectDate = false;
      this.buttons = true;
    }
  }
  handleEmpList(event){
    this.selectedBox = event.target.value;
    if(this.emp_list = true){
      this.selectedBox = this.emp_list;
      this.empTracking = false;
      this.scertificate = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.empCCertificate = false;

      this.selectDate = false;
      this.buttons = false;
    }
  }

  handleEmpSal(event){
    this.selectedBox = event.target.value;
    if(this.empSalLog = true){
      this.selectedBox = this.empSalLog;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.employeeProfile = false;
      
      this.arrows = true;

      this.buttons = true;
      this.selectDate = false;
    }
  }

  handleSCertificate(event){

    this.selectedBox = event.target.value;

    if(this.scertificate = true){
      this.selectedBox = this.scertificate;
      this.empTracking = false;
      this.emp_list = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empSalLog = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = true;
      this.buttons = true;
    } 

  }

  handleEmpTracking(event){
    this.selectedBox = event.target.value;
    if(this.empTracking = true){
      this.selectedBox = this.empTracking;
      this.scertificate = false;
      this.emp_list = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empSalLog = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;

    }
  }

  handleEmpGLog(event){
    this.selectedBox = event.target.value;
    if(this.empGLog = true){
      this.selectedBox = this.empGLog;
      this.scertificate = false;
      this.emp_list = false;
      this.empSalLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empTracking = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.empCCertificate = false;

      this.arrows = true;

      this.buttons = true;

    }
    
  }

  handleEmployeeAppointment(event){
    this.selectedBox = event.target.value;
    if(this.empAppoint = true){
      this.selectedBox = this.empAppoint;
      this.scertificate = false;
      this.emp_list = false;
      this.empSalLog = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empTracking = false;
      this.empGLog = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.empCCertificate = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = true;
    }
  }

  handleEmpCardCopy(event){
    this.selectedBox = event.target.value;
    if(this.empcardcopy = true){
      this.selectedBox = this.empcardcopy;
      this.scertificate = false;
      this.emp_list = false;
      this.empSalLog = false;
      this.empAppoint = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empTracking = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empCCertificate = false;
      this.empGLog = false;
      this.employeeProfile = false;
      this.selectDate = false;

    }
  }

  handleCardPrinting(event){
    this.selectedBox = event.target.value;
    if(this.cardPrinting = true){
      this.selectedBox = this.cardPrinting;
      this.scertificate = false;
      this.emp_list = false;
      this.empSalLog = false;
      this.empAppoint = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empcardcopy = false;
      this.empCCertificate = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = true;

    }
  }

  handleEmpCCertificate(event){
    this.selectedBox = event.target.value;
    if(this.empCCertificate = true){
      this.selectedBox = this.empCCertificate;
      this.scertificate = false;
      this.emp_list = false;
      this.empSalLog = false;
      this.empAppoint = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.empcardcopy = false;
      this.empGLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = true;

    }
  }

  handleEmpDepLog(event){
    this.selectedBox = event.target.value;
    if(this.empDepLog = true){
      this.selectedBox = this.empDepLog;
      this.scertificate = false;
      this.emp_list = false;
      this.empSalLog = false;
      this.empAppoint = false;
      this.cardPrinting = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.empCCertificate = false;
      this.empcardcopy = false;

      this.selectDate = false;
      this.buttons = true;
    }
  }

  handleExLetter(event){
    this.selectedBox = event.target.value;
    if(this.empExLetter = true){
      this.selectedBox = this.empExLetter;
      this.scertificate = false;
      this.emp_list = false;
      this.empSalLog = false;
      this.empAppoint = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empGdLog = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empCCertificate = false;
      this.employeeProfile = false;
      this.empcardcopy = false;
      this.empGLog = false;

      this.selectDate = false;
      this.buttons = true;
    }
  }

  handleGradeLog(event){
    this.selectedBox = event.target.value;
    if(this.empGdLog = true){
      this.selectedBox = this.empGdLog;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.empCCertificate = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = true;

    }
  }

  handleEmpShiftLog(event){
    this.selectedBox = event.target.value;
    if(this.empShLog = true){
      this.selectedBox = this.empShLog;
      this.selectedBox = this.emp_list;
      this.empTracking = false;
      this.scertificate = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = true;
    }
  }

  handleEmpLAllInfo(event){
    this.selectedBox = event.target.value;
    if(this.empLAllInfo = true){
      this.selectedBox = this.empLAllInfo;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empJobTypeLog = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = false;

    }
  }

  handleEmpJobtypeLog(event){
    this.selectedBox = event.target.value;
    if(this.empJobTypeLog = true){
      this.selectedBox = this.empJobTypeLog;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = true;

    }
  }

  handleSecWiseEmpCount(event){
    this.selectedBox = event.target.value;
    if(this.secWiseEmpCount = true){
      this.selectedBox = this.secWiseEmpCount;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empBranchLog = false;
      this.empJobTypeLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = false;
    }
  }

  handleEmpBranchLog(event){
    this.selectedBox = event.target.value;
    if(this.empBranchLog = true){
      this.selectedBox = this.empBranchLog;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.terminationLetter = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.secWiseEmpCount = false;
      this.selectDate = false;
      this.buttons = true;

    }
  }

  handleTerminationLetter(event){
    this.selectedBox = event.target.value;
    if(this.terminationLetter = true){
      this.selectedBox = this.terminationLetter;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.notices = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.secWiseEmpCount = false;
      this.empBranchLog = false;
      this.selectDate = false;
      this.buttons = true;
    }
  }

  handleNotices(event){
    this.selectedBox = event.target.value;
    if(this.notices = true){
      this.selectedBox = this.notices;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.terminationLetter = false;
      this.selectDate = false;
      this.buttons = true;
    }
  }

  handleDisableEmpList(event){
    this.selectedBox = event.target.value;
    if(this.disbaleEmpList = true){
      this.selectedBox = this.disbaleEmpList;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.notices = false;
      this.jobPermanentLetter = false;
      this.empBranchLog = false;
      this.secWiseEmpCount = false;
      this.notices = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.terminationLetter = false;
      this.selectDate = false;
      this.buttons = false;

    }
  }

  jobPermanantLetter(event){
    this.selectedBox = event.target.value;
    if(this.jobPermanentLetter = true){
      this.selectedBox = this.jobPermanentLetter;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.empBranchLog = false;
      this.secWiseEmpCount = false;
      this.notices = false;
      this.terminationLetter = false;
      this.disbaleEmpList = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = false;
      this.buttons = true;
    }
  }

  handleMarriageGrantCase(event){
    this.selectedBox = event.target.value;
    if(this.marriageGrantCase = true){
      this.selectedBox = this.marriageGrantCase;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.empBranchLog = false;
      this.secWiseEmpCount = false;
      this.notices = false;
      this.terminationLetter = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.deathGrantCase = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.buttons = true;
    }
  }
  
  handleDeathGrantCase(event){
    this.selectedBox = event.target.value;
    if(this.deathGrantCase = true){
      this.selectedBox = this.deathGrantCase;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.empBranchLog = false;
      this.secWiseEmpCount = false;
      this.notices = false;
      this.terminationLetter = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.servicesCertificate = false;
      this.empSalLog = false;
      this.marriageGrantCase = false;
      this.employeeProfile = false;
      this.selectDate = true;
      this.buttons = true;
    }
  }
  
  handleServicesCertificate(event){
    this.selectedBox = event.target.value;
    if(this.servicesCertificate = true){
      this.selectedBox = this.servicesCertificate;
      this.empTracking = false;
      this.scertificate = false;
      this.empGLog = false;
      this.empAppoint = false;
      this.empcardcopy = false;
      this.cardPrinting = false;
      this.empDepLog = false;
      this.empExLetter = false;
      this.empGdLog = false;
      this.emp_list = false;
      this.empShLog = false;
      this.empCCertificate = false;
      this.empLAllInfo = false;
      this.empJobTypeLog = false;
      this.empBranchLog = false;
      this.secWiseEmpCount = false;
      this.notices = false;
      this.terminationLetter = false;
      this.disbaleEmpList = false;
      this.jobPermanentLetter = false;
      this.marriageGrantCase = false;
      this.deathGrantCase = false;
      this.empSalLog = false;
      this.employeeProfile = false;
      this.selectDate = true;
      this.buttons = true;
    }
  }

  handleOSAll(event){
    this.selectBoxOS = event.target.value;
    if(this.opetionSelectorAll = true){
      this.selectBoxOS = this.opetionSelectorAll;
      this.operationSelectorByCard = false;
      this.specialCardFilter = false;
      this.specialGradeFilter = false;
      this.byBranch = false;
      this.empTracking = false;
    }
  }

  handleOSCardByRange(event){
    this.selectBoxOS = event.target.value;
    if(this.operationSelectorByCard = true){
      this.selectBoxOS = this.operationSelectorByCard;
      this.opetionSelectorAll = false;
      this.specialCardFilter = false;
      this.specialGradeFilter = false;
      this.byBranch = false;

      


    }
  }

  handleOSSpecialCardFilter(event){
    this.selectBoxOS = event.target.value;
    if(this.specialCardFilter = true){
      this.selectBoxOS = this.specialCardFilter;
      this.opetionSelectorAll = false;
      this.operationSelectorByCard = false;
      this.specialGradeFilter = false;
      this.byBranch = false;
    }
  }

  handleOSSpecialGradeFilter(event){
    this.selectBoxOS = event.target.value;
    if(this.specialGradeFilter = true){
      this.selectBoxOS = this.specialGradeFilter;
      this.opetionSelectorAll = false;
      this.operationSelectorByCard = false;
      this.specialCardFilter = false;
      this.byBranch = false;

    }
  }

  handleByBranch(event){
    this.selectBoxOS = event.target.value;
    if(this.byBranch = true){
      this.selectBoxOS = this.byBranch;
      this.opetionSelectorAll = false;
      this.operationSelectorByCard = false;
      this.specialCardFilter = false;
      this.specialGradeFilter = false;
    }
  }

  handleFrontSide(event){
  this.selectCardPrintingBox = event.target.value;
  if(this.frontSide = true){
    this.selectCardPrintingBox = this.frontSide;
    this.backSide = false;
  }
  }

  handleBackSide(event){
    this.selectCardPrintingBox = event.target.value;
    if(this.backSide = true){
      this.selectCardPrintingBox = this.backSide;
      this.frontSide = false; 
    }
  }

  handleAllAO(event){
  
  this.selectedBoxAO = event.target.value;
  if(this.AllOA = true){
    this.selectedBoxAO = this.AllOA;
    this.departmentAO = false;
  }
 
  }

  handleDepartmentAO(event){
    this.selectedBoxAO = event.target.value;
    if(this.departmentAO = true){
      this.selectedBoxAO = this.departmentAO;
      this.AllOA = false;
      this.designAO = false;
      this.sectionAO = false;
    }
  }

  handleDesignationAO(event) {
    this.selectedBoxAO = event.target.value;
    if (this.designAO = true) {
      this.AllOA  = false;
      this.departmentAO = false;
      this.sectionAO = false;
    }
  }

  handleSectionAO(event) {
    this.selectedBoxAO = event.target.value;
    if(this.sectionAO = true) {
      this.AllOA = false;
      this.departmentAO = false;
      this.designAO = false;
    }
  }

  handleDateChange(event) {
    console.log(event.target.value);
    this.selectedBoxDate = event.target.value;
    if(this.selectDate == true) {
      this.selectedBoxDate = this.selectDate;

    }
  }

  
  plusSlides(n){
    this.showSlides(this.slideIndex += n);
    this.arrows = false;
    
  }
  
  currentSlide(n){

    console.log(this.showSlides(this.slideIndex = n));

  }


  curentSlide(){
    this.currSlide = this.currentSlide(this.slideIndex=1);
   
  }

  showSlides(n){
    this.slides = document.getElementsByClassName("mySlides");
    this.dots = document.getElementsByClassName("dot");


    if(n > this.slides.length){ this.slideIndex = 1;
    }

    if(n < 1){ this.slideIndex = this.slides.length}

    for(this.s=0; this.s < this.slides.length; this.s++){
      console.log(this.slides[this.s].style.display = 'none');
    }
    this.slides[this.slideIndex-1].style.display = "block";  
    this.dots[this.slideIndex-1].className += " active";
    
  }

  makePDF():void {
    let DATA = document.getElementById('htmlData');
  
    html2canvas(DATA, { 
      allowTaint: false,
      useCORS: true
    }).then(canvas => {
        
        // let fileWidth = 208;
        
        // let fileHeight = canvas.height * fileWidth / canvas.width;
        
        // const FILEURI = canvas.toDataURL('image/png')
        // let PDF = new jsPDF('p', 'mm', 'a4');
        // let position = 0;
        // PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        // PDF.save('angular-demo.pdf');

        var imgWidth = 313;
       
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 0
        pdfData.addImage(contentDataURL, 'PNG', -75, position, imgWidth, imgHeight)
        pdfData.save(`MyPdf.pdf`);
    });     
    }

    selectAllSelector = selectAllDepartmentssections


}



