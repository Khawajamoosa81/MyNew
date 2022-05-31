import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-bonus-reports-form',
  templateUrl: './bonus-reports-form.component.html',
  styleUrls: ['./bonus-reports-form.component.css']
})
export class BonusReportsFormComponent implements OnInit {





  bonusSlips;
  bonusList;
  bonusSummary;
  bankTransferLetter;
  eMailReport;
  pAdvDed;







  selectedBox;





  allSAF;
  ByCardRangeSAF;
  ByBranchSAF;






  selectedBoxSAF;






  allSD;
  DeptSD;
  DesignSD;
  SectionSD;



  selectedBoxSD;






  showReportt;
  stopReport;


  constructor() { }

  ngOnInit() {

    this.bonusSlips = true;
    this.bonusList = false;
    this.bonusSummary = false;
    this.bankTransferLetter = false;
    this.eMailReport = false;
    this.pAdvDed = false;







    this.allSAF = true;
    this.ByCardRangeSAF = false;
    this.ByBranchSAF = false;





    this.allSD = true;
    this.DeptSD = false;
    this.DesignSD = false;
    this.SectionSD = false;




    this.stopReport = true;
    this.showReportt = false;
  }


  handleBonusSlips(event){
    this.selectedBox = event.target.value;
    if(this.bonusSlips = true){
      this.selectedBox = this.bonusSlips;
      this.bonusList = false;
      this.bonusSummary = false;
      this.bankTransferLetter = false;
      this.eMailReport = false;
      this.pAdvDed = false;

    }
  }

  handleBonusList(event){
    this.selectedBox = event.target.value;
    if(this.bonusList = true){
      this.selectedBox = this.bonusList;
      this.bonusSlips = false;
      this.bonusSummary = false;
      this.bankTransferLetter = false;
      this.eMailReport = false;
      this.pAdvDed = false;

    }
  }


  handleBonusSummary(event){
    this.selectedBox = event.target.value;
    if(this.bonusSummary = true){
      this.selectedBox = this.bonusSummary;
      this.bonusSlips = false;
      this.bonusList = false;
      this.bankTransferLetter = false;
      this.eMailReport = false;
      this.pAdvDed = false;

    }
  }

  handleBankTransferLetter(event){
    this.selectedBox = event.target.value;
    if(this.bankTransferLetter = true){
      this.selectedBox = this.bankTransferLetter;
      this.bonusSlips = false;
      this.bonusList = false;
      this.bonusSummary = false;
      this.eMailReport = false;
      this.pAdvDed = false;

    }
  }


  handleEMailReport(event){
    this.selectedBox = event.target.value;
    if(this.eMailReport = true){
      this.selectedBox = this.eMailReport;
      this.bonusSlips = false;
      this.bonusList = false;
      this.bonusSummary = false;
      this.bankTransferLetter = false;
      this.pAdvDed = false;
    }
  }


  handlePAdvDed(event){
    this.selectedBox = event.target.value;
    if(this.pAdvDed = true){
      this.selectedBox = this.pAdvDed;
      this.bonusSlips = false;
      this.bonusList = false;
      this.bonusSummary = false;
      this.bankTransferLetter = false;
      this.eMailReport = false;
    }
  }









  handleAllSAF(event){
    this.selectedBoxSAF = event.target.value;
    if(this.allSAF = true){
      this.selectedBoxSAF = this.allSAF;
      this.ByCardRangeSAF = false;
      this.ByBranchSAF = false;
    }
  }


  handleByCardRangeSAF(event){
    this.selectedBoxSAF = event.target.value;
    if(this.ByCardRangeSAF = true){
      this.selectedBoxSAF = this.ByCardRangeSAF;
      this.allSAF = false;
      this.ByBranchSAF = false;
    }
  }


  handleByBranchSAF(event){
    this.selectedBoxSAF = event.target.value;
    if(this.ByBranchSAF = true){
      this.selectedBoxSAF = this.ByBranchSAF;
      this.allSAF = false;
      this.ByCardRangeSAF = false;
    }
  }





  handleAllSD(event){
    this.selectedBoxSD = event.target.value;
    if(this.allSD = true){
      this.selectedBoxSD = this.allSD;
      this.DeptSD = false;
      this.DesignSD = false;
      this.SectionSD = false;

    }
  }

  handleDeptSD(event){
    this.selectedBoxSD = event.target.value;
    if(this.DeptSD = true){
      this.selectedBoxSD = this.DeptSD;
      this.allSD = false;
      this.DesignSD = false;
      this.SectionSD = false;

    }
  }

  handleDesignSD(event){
    this.selectedBoxSD = event.target.value;
    if(this.DesignSD = true){
      this.selectedBoxSD = this.DesignSD;
      this.allSD = false;
      this.DeptSD = false;
      this.SectionSD = false;
    }

  }


  handleSectionSD(event){
    this.selectedBoxSD = event.target.value;
    if(this.SectionSD = true){
      this.selectedBoxSD = this.SectionSD;
      this.allSD = false;
      this.DeptSD = false;
      this.DesignSD = false;
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

        var imgWidth = 200;
       
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdfData.save(`MyPdf.pdf`);
    });     
    }

}
