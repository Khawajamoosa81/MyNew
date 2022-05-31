import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'smart-annual-leaves-report-form',
  templateUrl: './annual-leaves-report-form.component.html',
  styleUrls: ['./annual-leaves-report-form.component.css']
})
export class AnnualLeavesReportFormComponent implements OnInit {


  annLeavesList;
  annLeavesSlips;
  listEmpEligibleAnnLeaves;
  PAdvDed;
  




  selectedBox;






  ByMonthOS;
  ByCardRangeOS;
  ByBranchOS;






  selectedBoxOS;






  allSAD;
  DeptSAD;
  DesignSAD;
  SectionSAD;



  selectedBoxSAD;




  showReportt;
  stopReport;


  constructor() { }

  ngOnInit() {

    this.annLeavesList = true;
    this.annLeavesSlips = false;
    this.listEmpEligibleAnnLeaves = false;
    this.PAdvDed = false;




    this.ByMonthOS = true;
    this.ByCardRangeOS = false;
    this.ByBranchOS = false;





    this.allSAD = true;
    this.DeptSAD = false;
    this.DesignSAD = false;
    this.SectionSAD = false;





    this.showReportt = false;
    this.stopReport = true;

  }




  handleAnnLeavesList(event){
    this.selectedBox = event.target.value;
    if(this.annLeavesList = true){
      this.selectedBox = this.annLeavesList;
      this.annLeavesSlips = false;
      this.listEmpEligibleAnnLeaves = false;
      this.PAdvDed = false;

    }
  }


  handleAnnLeavesSlips(event){
    this.selectedBox = event.target.value;
    if(this.annLeavesSlips = true){
      this.selectedBox = this.annLeavesSlips;
      this.annLeavesList = false;
      this.listEmpEligibleAnnLeaves = false;
      this.PAdvDed = false;

    }
  }


  handleListEmpEligibleAnnLeaves(event){
    this.selectedBox = event.target.value;
    if(this.listEmpEligibleAnnLeaves = true){
      this.selectedBox = this.listEmpEligibleAnnLeaves;
      this.annLeavesList = false;
      this.annLeavesSlips = false;
      this.PAdvDed = false;
    }
  }

  handlePAdvDed(event){
    this.selectedBox = event.target.value;
    if(this.PAdvDed = true){
      this.selectedBox = this.PAdvDed;
      this.annLeavesList = false;
      this.annLeavesSlips = false;
      this.listEmpEligibleAnnLeaves = false;
    }
  }




  




  handleByMonthOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByMonthOS = true){
      this.selectedBoxOS = this.ByMonthOS;
      this.ByCardRangeOS = false;
      this.ByBranchOS = false;

    }
  }

  handleByCardRangeOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByCardRangeOS = true){
      this.selectedBoxOS = this.ByCardRangeOS;
      this.ByMonthOS = false;
      this.ByBranchOS = false;
    }
  }

  handleByBranchOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByBranchOS = true){
      this.selectedBoxOS = this.ByBranchOS;
      this.ByMonthOS = false;
      this.ByCardRangeOS = false;
    }
  }








  handleallSAD(event){
    this.selectedBoxSAD = event.target.value;
    if(this.allSAD = true){
      this.selectedBoxSAD = this.allSAD;
      this.DeptSAD = false;
      this.DesignSAD = false;
            this.SectionSAD = false;

    }
  }

  handleDeptSAD(event){
    this.selectedBoxSAD = event.target.value;
    if(this.DeptSAD = true){
      this.selectedBoxSAD = this.DeptSAD;
      this.allSAD = false;
      this.DesignSAD = false;
      this.SectionSAD = false;

    }
  }

  handleDesignSAD(event){
    this.selectedBoxSAD = event.target.value;
    if(this.DesignSAD = true){
      this.selectedBoxSAD = this.DesignSAD;
      this.allSAD = false;
      this.DeptSAD = false;
      this.SectionSAD = false;
    }
  }

  handleSectionSAD(event){
    this.selectedBoxSAD = event.target.value;
    if(this.SectionSAD = true){
      this.selectedBoxSAD = this.SectionSAD;
      this.allSAD = false;
      this.DeptSAD = false;
      this.DesignSAD = false;
    }
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







  showReport(){
    this.showReportt = true;
    this.stopReport = false;
    console.log('Show Report');
    
  }




}
