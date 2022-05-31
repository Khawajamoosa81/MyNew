import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-misc-reports-form',
  templateUrl: './misc-reports-form.component.html',
  styleUrls: ['./misc-reports-form.component.css']
})
export class MiscReportsFormComponent implements OnInit {


  EOBIConM;
  EmpAtAgeTimeOfJoin;
  EOBIReport;
  EmpHygieneCard;
  activeEOBIList;
  salarySlips;
  inActiveEobiList;
  salaryReceivingList;
  PESSIContribM;
  EmpListForInsurance;
  PessiFormatM;
  EmpListForInsuranceRem;
  EobiFormatMonthly;
  AnnualLDueForSelectMonth;
  ActivePessiList;
  UnionFundContrib;
  inActivePessiList;
  inRejoinEmpList;
  EmpListHavPessi;
  PessiContribFormat;
  EmpListMPessiCards;
  EmpPessiSal;
  EmpListDiffJoinAndG;
  empSalM;




  selectedBox;




  allSO;
  ByCardRangeSO;
  byBranchSO;


  allSO2;
  byAgeRangeSO2;


  selectedBoxSO;




  allSAP;
  deptSAP;
  designSAP;
  sectionSAP;




  selectedBoxSAP;




  selectionSO1;



  showReportt;
  stopReport;

  constructor() { }

  ngOnInit() {

    this.EOBIConM = true;
    this.EmpAtAgeTimeOfJoin = false;
    this.EOBIReport = false;
    this.EmpHygieneCard = false;
    this.activeEOBIList = false;
    this.salarySlips = false;
    this.inActiveEobiList = false;
    this.salaryReceivingList = false;
    this.PESSIContribM = false;
    this.EmpListForInsurance = false;
    this.PessiFormatM = false;
    this.EmpListForInsuranceRem = false;
    this.EobiFormatMonthly = false;
    this.AnnualLDueForSelectMonth = false;
    this.ActivePessiList = false;
    this.UnionFundContrib = false;
    this.inActivePessiList = false;
    this.inRejoinEmpList = false;
    this.EmpListHavPessi = false;
    this.PessiContribFormat = false;
    this.EmpListMPessiCards = false;
    this.EmpPessiSal = false;
    this.EmpListDiffJoinAndG = false;
    this.empSalM = false;



    this.allSO = true;
    this.ByCardRangeSO = false;
    this.byBranchSO = false;


    this.allSO2 = true;
    this.byAgeRangeSO2 = false;


    this.allSAP = true;
    this.deptSAP = false;
    this.designSAP = false;
    this.sectionSAP = false;



    this.selectionSO1 = true;



    this.showReportt = false;
    this.stopReport = true;

  }

  handleEOBIConM(event){
    this.selectedBox = event.target.value;
    if(this.EOBIConM = true){
      this.selectedBox = this.EOBIConM;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.activeEOBIList = false;
      this.salarySlips = false;
      this.inActiveEobiList = false;
      this.salaryReceivingList = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;


      this.selectionSO1 = true;
    }
  }

  handleEmpAtAgeTimeOfJoin(event){
    this.selectedBox = event.target.value;
    if(this.EmpAtAgeTimeOfJoin = true){
      this.selectedBox = this.EmpAtAgeTimeOfJoin;
      this.EOBIConM = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.activeEOBIList = false;
      this.salarySlips = false;
      this.inActiveEobiList = false;
      this.salaryReceivingList = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;


      this.selectionSO1 = false;
      
    }
  }

  handleEOBIReport(event){
    this.selectedBox = event.target.value;
    if(this.EOBIReport = true){
      this.selectedBox = this.EOBIReport;
      this.EOBIConM = false;
      this.EmpHygieneCard = false;
      this.activeEOBIList = false;
      this.salarySlips = false;
      this.inActiveEobiList = false;
      this.salaryReceivingList = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;


      this.EmpAtAgeTimeOfJoin = false;
      this.selectionSO1 = true;

    }
  }

  handleEmpHygieneCard(event){
    this.selectedBox = event.target.checked;
    if(this.EmpHygieneCard = true){
      this.selectedBox = this.EmpHygieneCard;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.activeEOBIList = false;
      this.salarySlips = false;
      this.inActiveEobiList = false;
      this.salaryReceivingList = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;

      this.selectionSO1 = true;
      this.EmpAtAgeTimeOfJoin = false;
    }
  }

  handleActiveEOBIList(event){
    this.selectedBox = event.target.checked;
    if(this.activeEOBIList = true){
      this.selectedBox = this.activeEOBIList;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.inActiveEobiList = false;
      this.salaryReceivingList = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;

    }
  }


  handleSalarySlips(event){
    this.selectedBox = event.target.value;
    if(this.salarySlips = true){
      this.selectedBox = this.salarySlips;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.inActiveEobiList = false;
      this.salaryReceivingList = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.activeEOBIList = false;

    }
  }

  handleInActiveEobiList(event){
    this.selectedBox = event.target.value;
    if(this.inActiveEobiList = true){
      this.selectedBox = this.inActiveEobiList;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.salaryReceivingList = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.activeEOBIList = false;

    }
  }

  handleSalaryReceivingList(event){
    this.selectedBox = event.target.value;
    if(this.salaryReceivingList = true){
      this.selectedBox = this.salaryReceivingList;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.PESSIContribM = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;

    }
  }

  handlePESSIContribM(event){
    this.selectedBox = event.target.value;
    if(this.PESSIContribM = true){
      this.selectedBox = this.PESSIContribM;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.EmpListForInsurance = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleEmpListForInsurance(event){
    this.selectedBox = event.target.value;
    if(this.EmpListForInsurance = true){
      this.selectedBox = this.EmpListForInsurance;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handlePessiFormatM(event){
    this.selectedBox = event.target.value;
    if(this.PessiFormatM = true){
      this.selectedBox = this.PessiFormatM;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.EmpListForInsuranceRem = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleEmpListForInsuranceRem(event){
    this.selectedBox = event.target.value;
    if(this.EmpListForInsuranceRem = true){
      this.selectedBox = this.EmpListForInsuranceRem;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.EobiFormatMonthly = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleEobiFormatMonthly(event){
    this.selectedBox = event.target.value;
    if(this.EobiFormatMonthly = true){
      this.selectedBox = this.EobiFormatMonthly;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.AnnualLDueForSelectMonth = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleAnnualLeavesDueForSelectMonth(event){
    this.selectedBox = event.target.value;
    if(this.AnnualLDueForSelectMonth = true){
      this.selectedBox = this.AnnualLDueForSelectMonth;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.ActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.EobiFormatMonthly = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleActivePessiList(event){
    this.selectedBox = event.target.value;
    if(this.ActivePessiList = true){
      this.selectedBox = this.ActivePessiList;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.UnionFundContrib = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleUnionFundContrib(event){
    this.selectedBox = event.target.value;
    if(this.UnionFundContrib = true){
      this.selectedBox = this.UnionFundContrib;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.inActivePessiList = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.ActivePessiList = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleInActivePessiList(event){
    this.selectedBox = event.target.value;
    if(this.inActivePessiList = true){
      this.selectedBox = this.inActivePessiList;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.inRejoinEmpList = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.UnionFundContrib = false;
      this.ActivePessiList = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.PessiFormatM = false;
      this.EmpListForInsuranceRem = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;

    }
  }

  handleInRejoinEmpList(event){
    this.selectedBox = event.target.value;
    if(this.inRejoinEmpList = true){
      this.selectedBox = this.inRejoinEmpList;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.EmpListHavPessi = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.inActivePessiList = false;
      this.UnionFundContrib = false;
      this.ActivePessiList = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handleEmpListHavPessi(event){
    this.selectedBox = event.target.value;
    if(this.EmpListHavPessi = true){
      this.selectedBox = this.EmpListHavPessi;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.PessiContribFormat = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.inRejoinEmpList = false;
      this.inActivePessiList = false;
      this.UnionFundContrib = false;
      this.ActivePessiList = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.activeEOBIList = false;
    }
  }

  handlePessiContribFormat(event){
    this.selectedBox = event.target.value;
    if(this.PessiContribFormat = true){
      this.selectedBox = this.PessiContribFormat;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.EmpListMPessiCards = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.EmpListHavPessi = false;
      this.inRejoinEmpList = false;
      this.inActivePessiList = false;
      this.UnionFundContrib = false;
      this.ActivePessiList = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.salarySlips = false;
      this.activeEOBIList = false;
    }
  }

  handleEmpListMPessiCards(event){
    this.selectedBox = event.target.value;
    if(this.EmpListMPessiCards = true){
      this.selectedBox = this.EmpListMPessiCards;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.EmpPessiSal = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.PessiContribFormat = false;
      this.EmpListHavPessi = false;
      this.inRejoinEmpList = false;
      this.inActivePessiList = false;
      this.UnionFundContrib = false;
      this.inActivePessiList  = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.ActivePessiList = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
      this.salarySlips = false;
      this.activeEOBIList = false;
    }
  }

  handleEmpPessiSal(event){
    this.selectedBox = event.target.value;
    if(this.EmpPessiSal = true){
      this.selectedBox = this.EmpPessiSal;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.EmpListDiffJoinAndG = false;
      this.empSalM = false;
      this.EmpListMPessiCards = false;
      this.PessiContribFormat = false;
      this.EmpListHavPessi = false;
      this.inRejoinEmpList = false;
      this.inActivePessiList = false;
      this.UnionFundContrib = false;
      this.ActivePessiList = false;
      this.AnnualLDueForSelectMonth = false;
      this.EobiFormatMonthly = false;
      this.EmpListForInsuranceRem = false;
      this.PessiFormatM = false;
      this.EmpListForInsurance = false;
      this.PESSIContribM = false;
      this.salaryReceivingList = false;
      this.inActiveEobiList = false;
    }
  }

  handleEmpListDiffJoinAndG(event){
    this.selectedBox = event.target.value;
    if(this.EmpListDiffJoinAndG = true){
      this.selectedBox = this.EmpListDiffJoinAndG;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
      this.empSalM = false;
    }
  }

  handleEmpSalM(event){
    this.selectedBox = event.target.value;
    if(this.empSalM = true){
      this.selectedBox = this.empSalM;
      this.EOBIConM = false;
      this.EmpAtAgeTimeOfJoin = false;
      this.EOBIReport = false;
      this.EmpHygieneCard = false;
      this.salarySlips = false;
    }
  }





  handleAllSO(event){
    this.selectedBoxSO = event.target.value;
    if(this.allSO = true){
      this.selectedBoxSO = this.allSO;
      this.ByCardRangeSO = true;
      this.byBranchSO = false;

    }

  }


  handleByCardRangeSO(event){
    this.selectedBoxSO = event.target.value;
    if(this.ByCardRangeSO = true){
      this.selectedBoxSO = this.ByCardRangeSO;
      this.allSO = false;
      this.byBranchSO = false;
    }
  }

  handleByBranchSO(event){
    this.selectedBoxSO = event.target.value;
    if(this.byBranchSO = true){
      this.selectedBoxSO = this.byBranchSO;
      this.allSO = false;
      this.ByCardRangeSO = false;
    }
  }


  handleAllSO2(event){
    this.selectedBoxSO = event.target.value;
    if(this.allSO2 = true){
      this.selectedBoxSO = this.allSO2;
      this.byAgeRangeSO2 = false;
    }
  }

  handleByAgeRangeSO2(event){
    this.selectedBoxSO = event.target.value;
    if(this.byAgeRangeSO2 = true){
      this.selectedBoxSO = this.byAgeRangeSO2;
      this.allSO2 = false;
    }
  }





  handleAllSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.allSAP = true){
      this.selectedBoxSAP = this.allSAP;
      this.deptSAP = false;
      this.designSAP = false;
      this.sectionSAP = false;

    }
  }

  handleDeptSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.deptSAP = true){
      this.selectedBoxSAP = this.deptSAP;
      this.allSAP = false;
      this.designSAP = false;
      this.sectionSAP = false;

    }
  }

  handleDesignSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.designSAP = true){
      this.selectedBoxSAP = this.designSAP;
      this.allSAP = false;
      this.deptSAP = false;
      this.sectionSAP = false;
    }
  }

  handleSectionSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.sectionSAP = true){
      this.selectedBoxSAP = this.sectionSAP;
      this.allSAP = false;
      this.deptSAP = false;
      this.designSAP = false;
    }
  }



  showReport(){
    this.showReportt = true;
    this.stopReport = false;
    console.log('Show Report');
    
  }


  
  EmpRecord(){
    this.showReportt = false;
    this.stopReport = true;
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

        var imgWidth = 310;
       
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdfData.addImage(contentDataURL, 'PNG', -70, position, imgWidth, imgHeight)
        pdfData.save(`MyPdf.pdf`);
    });     
    }


}
