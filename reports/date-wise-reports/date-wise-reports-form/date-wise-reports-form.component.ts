import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-date-wise-reports-form',
  templateUrl: './date-wise-reports-form.component.html',
  styleUrls: ['./date-wise-reports-form.component.css']
})
export class DateWiseReportsFormComponent implements OnInit {

  employeeTurnOver;
  newJoining;
  cardExpiry;
  Notices;
  ListOfLeftEmp;
  probationEnd;
  pendingSalaryStatus;
  LeftEmpLetter;
  OverPreCalSummary;
  OverTimePreCal;
  DailyListOfWorks;
  InActiveEOBIList;
  SalaryAnalysisReport;
  EmpMonthlyReport;


  
  selectedBox;

  
  AllOS;
  ByBranchOS;
  ByGradeOS;
  ByJobTypeOS;
  ByShiftOS;
  HiringCriteriaOS;
  ByReasonOS;


  selectedBoxOS;


  AllSAP;
  DeptSAP;
  DesignSAP;
  SectionSAP;

  selectedBoxSAP;




  showReportt;
  stopReport;


  constructor() { }

  ngOnInit() {
    this.employeeTurnOver = true;
    this.newJoining = false;
    this.cardExpiry = false;
    this.Notices = false;
    this.ListOfLeftEmp = false;
    this.probationEnd = false;
    this.pendingSalaryStatus = false;
    this.LeftEmpLetter = false;
    this.OverPreCalSummary = false;
    this.OverTimePreCal = false;
    this.DailyListOfWorks = false;
    this.InActiveEOBIList = false;
    this.SalaryAnalysisReport = false;
    this.EmpMonthlyReport = false;



    this.AllOS = true;
    this.ByBranchOS = false;
    this.ByGradeOS = false;
    this.ByJobTypeOS = false;
    this.HiringCriteriaOS = false;
    this.ByReasonOS = false;

    
    this.AllSAP = true;
    this.DeptSAP = false;
    this.DesignSAP = false;
    this.SectionSAP = false;




    this.showReportt = false;
    this.stopReport = true;

  }

  empTurnOver(event){
    this.selectedBox = event.target.value;
    if(this.employeeTurnOver = true){
      this.selectedBox = this.employeeTurnOver;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }

  }


  handleNewJoining(event){
    this.selectedBox = event.target.value;
    if(this.newJoining = true){
      this.selectedBox = this.newJoining;
      this.employeeTurnOver = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleCardExpiry(event){
    this.selectedBox = event.target.value;
    if(this.cardExpiry = true){
      this.selectedBox = this.cardExpiry;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleNotices(event){
    this.selectedBox = event.target.value;
    if(this.Notices = true){
      this.selectedBox = this.Notices;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }


  handleListOfLeftEmp(event){
    this.selectedBox = event.target.value;
    if(this.ListOfLeftEmp = true){
      this.selectedBox = this.ListOfLeftEmp;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleProbationEnd(event){
    this.selectedBox = event.target.value;
    if(this.probationEnd = true){
      this.selectedBox = this.probationEnd;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handlePendingSalaryStatus(event){
    this.selectedBox = event.target.value;
    if(this.pendingSalaryStatus = true){
      this.selectedBox = this.pendingSalaryStatus;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }

  }

  handleLeftEmpLetter(event){
    this.selectedBox = event.target.value;
    if(this.LeftEmpLetter = true){
      this.selectedBox = this.LeftEmpLetter;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleOverPreCalSummary(event){
    this.selectedBox = event.target.value;
    if(this.OverPreCalSummary = true){
      this.selectedBox = this.OverPreCalSummary;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleOverTimePreCal(event){
    this.selectedBox = event.target.value;
    if(this.OverTimePreCal = true){
      this.selectedBox = this.OverTimePreCal;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.DailyListOfWorks = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleDailyListOfWorks(event){
    this.selectedBox = event.target.value;
    if(this.DailyListOfWorks = true){
      this.selectedBox = this.DailyListOfWorks;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.InActiveEOBIList = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleInActiveEOBIList(event){
    this.selectedBox = event.target.value;
    if(this.InActiveEOBIList = true) {
      this.selectedBox = this.InActiveEOBIList;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.SalaryAnalysisReport = false;
      this.EmpMonthlyReport = false;

    }
  }

  handleSalaryAnalysisReport(event){
    this.selectedBox = event.target.value;
    if(this.SalaryAnalysisReport = true) {
      this.selectedBox = this.SalaryAnalysisReport;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
      this.EmpMonthlyReport = false;
      this.InActiveEOBIList = false;
    }
  }

  handleEmpMonthlyReport(event){
    this.selectedBox = event.target.value;
    if(this.EmpMonthlyReport = true){
      this.selectedBox = this.EmpMonthlyReport;
      this.employeeTurnOver = false;
      this.newJoining = false;
      this.cardExpiry = false;
      this.Notices = false;
      this.ListOfLeftEmp = false;
      this.probationEnd = false;
      this.pendingSalaryStatus = false;
      this.LeftEmpLetter = false;
      this.OverPreCalSummary = false;
      this.OverTimePreCal = false;
      this.DailyListOfWorks = false;
    }
  }












  handleAllOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.AllOS = true) {
      this.selectedBoxOS = this.AllOS;
      this.ByBranchOS = false;
      this.ByReasonOS = false;
      this.ByGradeOS = false;
      this.ByJobTypeOS = false;
      this.HiringCriteriaOS = false;
      this.ByShiftOS = false;

    }
  }

  handleByBranchOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByBranchOS = true){
      this.selectedBoxOS = this.ByBranchOS;
      this.AllOS = false;
      this.ByReasonOS = false;
      this.ByGradeOS = false;
      this.ByJobTypeOS = false;
      this.HiringCriteriaOS = false;
      this.ByShiftOS = false;

    }
  }

  handleByGradeOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByGradeOS = true){
      this.selectedBoxOS = this.ByGradeOS;
      this.AllOS = false;
      this.ByBranchOS = false;
      this.ByReasonOS = false;
      this.ByJobTypeOS = false;
      this.HiringCriteriaOS = false;
      this.ByShiftOS = false;

    }
  }

  handleJobTypeOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByJobTypeOS = true){
      this.selectedBox = this.ByJobTypeOS;
      this.AllOS = false;
      this.ByBranchOS = false;
      this.ByGradeOS = false;
      this.ByReasonOS = false;
      this.HiringCriteriaOS = false;
      this.ByShiftOS = false;
    }
  }

  handleByShiftOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByShiftOS = true){
      this.selectedBox = this.ByShiftOS;
      this.AllOS = false;
      this.ByBranchOS = false;
      this.ByGradeOS = false;
      this.ByJobTypeOS = false;
      this.ByReasonOS = false;
      this.HiringCriteriaOS = false;
    }
  }

  handleHiringCriteriaOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.HiringCriteriaOS = true){
      this.selectedBoxOS = this.HiringCriteriaOS;
      this.AllOS = false;
      this.ByBranchOS = false;
      this.ByGradeOS = false;
      this.ByJobTypeOS = false;
      this.ByShiftOS = false;
      this.ByReasonOS = false;
    }

  }

  handleByReasonOS(event) {
    this.selectedBox = event.target.value;
    if(this.ByReasonOS = true) {
      this.selectedBox = this.ByReasonOS;
      this.AllOS = false;
      this.ByBranchOS = false;
      this.ByGradeOS = false;
      this.ByJobTypeOS = false;
      this.HiringCriteriaOS = false;
      this.ByShiftOS = false;
    }
  }




  handleAllSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.AllSAP = true) {
      this.selectedBoxSAP = this.AllSAP;
      this.DeptSAP = false;
      this.DesignSAP = false;
      this.SectionSAP = false;

    }
  }

  handleDeptSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.DeptSAP = true){
      this.selectedBoxSAP = this.DeptSAP;
      this.AllSAP = false;
      this.DesignSAP = false;
      this.SectionSAP = false;

    }
  }

  handleDesignSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.DesignSAP = true) {
      this.selectedBoxSAP = this.DesignSAP;
      this.AllSAP = false;
      this.DeptSAP = false;
      this.SectionSAP = false;
    } 
  }

  handleSecionSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.SectionSAP = true) {
      this.selectedBoxSAP = this.SectionSAP;
      this.AllSAP = false;
      this.DeptSAP = false;
      this.DesignSAP = false;
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
