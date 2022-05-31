import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-advance-reports-form',
  templateUrl: './advance-reports-form.component.html',
  styleUrls: ['./advance-reports-form.component.css']
})
export class AdvanceReportsFormComponent implements OnInit {

  

  Active;
  NonActive;
  ActiveAll;


  selectedActive;







  TAdvPaid;
  tAdvPaidReceAgainSal;
  TAdvSlips;
  TAdvReceList;
  PPaidAdv;
  PPaidAdvAgainstAnn;
  AdvanceRece;
  AdvanceBal;
  Ledger;
  PAdvDedAgainAL;
  PAdvExpectedReturn;
  PAdvEmpWithZero;
  PAdvanceAgainBonus;
  RFDAdv;
  TAdvReceList2;
  TAdvTransferLetter;

  
  selectedBox;




  allOS;
  ByCardRangeOS;
  ByBranchOS;

  
  
  selectedBoxOS;






  allSAO;
  deptSAO;
  designSAO;
  sectionSAO;



  selectedBoxSAO;




  showReportt;
  stopReport;


  constructor() { }

  ngOnInit() {



    this.Active = true;
    this.NonActive = false;
    this.ActiveAll = false;
  




    this.TAdvPaid = true;
    this.tAdvPaidReceAgainSal = false;
    this.TAdvSlips = false;
    this.TAdvReceList = false;
    this.PPaidAdv = false;
    this.PPaidAdvAgainstAnn = false;
    this.AdvanceBal = false;
    this.Ledger = false;
    this.PAdvDedAgainAL = false;
    this.PAdvExpectedReturn = false;
    this.PAdvEmpWithZero = false;
    this.PAdvanceAgainBonus = false;
    this.RFDAdv = false
    this.TAdvReceList2 = false;
    this.TAdvTransferLetter = false;




    this.allOS = true;
    this.ByCardRangeOS = false;
    this.ByBranchOS = false;




    this.allSAO = true;
    this.deptSAO = false;
    this.designSAO = false;
    this.sectionSAO = false;




    this.showReportt = false;
    this.stopReport = true;

  }




  handleActive(event){
    this.selectedActive = event.target.value;
    if(this.Active = true){
      this.selectedActive = this.Active;
      this.NonActive = false;
      this.ActiveAll = false;
    }
  }


  handleNonActive(event){
    this.selectedActive = event.target.value;
    if(this.NonActive = true){
      this.selectedActive = this.NonActive;
      this.Active = false;
      this.ActiveAll = false;
    }
  }


  handleActiveAll(event){
    this.selectedActive = event.target.value;
    if(this.ActiveAll = true){
      this.selectedActive = this.ActiveAll;
      this.Active = false;
      this.NonActive = false;
    }
  }
  





  handleTAdvPaid(event){
    this.selectedBox = event.target.value;
    if(this.TAdvPaid = true){
      this.selectedBox = this.TAdvPaid;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;

    }
  }

  handleTAdvPaidReceAgainSal(event){
    this.selectedBox = event.target.value;
    if(this.tAdvPaidReceAgainSal = true){
      this.selectedBox = this.tAdvPaidReceAgainSal;
      this.TAdvPaid = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;

    }
  }

  handleTAdvSlips(event){
    this.selectedBox = event.target.value;
    if(this.TAdvSlips = true){
      this.selectedBox = this.TAdvSlips;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;

    }
  }

  handleTAdvReceList(event){
    this.selectedBox = event.target.value;
    if(this.TAdvReceList = true){
      this.selectedBox = this.TAdvReceList;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;

    }
  }

  handlePPaidAdv(event){
    this.selectedBox = event.target.value;
    if(this.PPaidAdv = true){
      this.selectedBox = this.PPaidAdv;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.TAdvPaid = false;
      this.TAdvReceList = false;

    }
  }

  handlePPaidAdvAgainstAnn(event){
    this.selectedBox = event.target.value;
    if(this.PPaidAdvAgainstAnn = true){
      this.selectedBox = this.PPaidAdvAgainstAnn;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
    }
  }

  handleAdvanceRece(event){
    this.selectedBox = event.target.value;
    if(this.AdvanceRece = true){
      this.selectedBox = this.AdvanceRece;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.TAdvReceList = false;
      this.PPaidAdvAgainstAnn = false;
      this.PPaidAdv = false;

    }
  }

  handleAdvanceBal(event){
    this.selectedBox = event.target.value;
    if(this.AdvanceBal = true){
      this.selectedBox = this.AdvanceBal;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.Ledger = false;
      this.PAdvDedAgainAL = false;
      this.AdvanceRece = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
    }
  }

  handleLegder(event){
    this.selectedBox = event.target.value;
    if(this.Ledger = true){
      this.selectedBox = this.Ledger;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.PAdvDedAgainAL = false;
      this.TAdvReceList = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.PPaidAdv = false;
    }
  }
  
  handlePAdvDedAgainAL(event){
    this.selectedBox = event.target.value;
    if(this.PAdvDedAgainAL = true){
      this.selectedBox = this.PAdvDedAgainAL;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvExpectedReturn = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;

    }
  }

  handlePAdvExpectedReturn(event){
    this.selectedBox = event.target.value;
    if(this.PAdvExpectedReturn = true){
      this.selectedBox = this.PAdvExpectedReturn;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvEmpWithZero = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.PAdvDedAgainAL = false;

    }
  }

  handlePAdvEmpWithZero(event){
    this.selectedBox = event.target.value;
    if(this.PAdvEmpWithZero = true){
      this.selectedBox = this.PAdvEmpWithZero;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.PAdvanceAgainBonus = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.PAdvExpectedReturn = false;
      this.PAdvDedAgainAL = false;
    }
  }
 
  handlePAdvanceAgainBonus(event){
    this.selectedBox = event.target.value;
    if(this.PAdvanceAgainBonus = true){
      this.selectedBox = this.PAdvanceAgainBonus;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.RFDAdv = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.PAdvEmpWithZero = false;
      this.PAdvDedAgainAL = false;

    }
  }

  handleRFDAdv(event){
    this.selectedBox = event.target.value;
    if(this.RFDAdv = true){
      this.selectedBox = this.RFDAdv;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.TAdvReceList2 = false;
      this.TAdvTransferLetter = false;
      this.PAdvanceAgainBonus = false;
      this.PAdvDedAgainAL = false;
    }
  }

  handleTAdvReceList2(event){
    this.selectedBox = event.target.value;
    if(this.TAdvReceList2 = true){
      this.selectedBox = this.TAdvReceList2;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.TAdvTransferLetter = false;
      this.RFDAdv = false;
    }
  }

  handleTAdvTransferLetter(event){
    this.selectedBox = event.target.value;
    if(this.TAdvTransferLetter = true){
      this.selectedBox = this.TAdvTransferLetter;
      this.TAdvPaid = false;
      this.tAdvPaidReceAgainSal = false;
      this.TAdvSlips = false;
      this.TAdvReceList = false;
      this.PPaidAdv = false;
      this.PPaidAdvAgainstAnn = false;
      this.AdvanceRece = false;
      this.AdvanceBal = false;
      this.Ledger = false;
      this.TAdvReceList2 = false;
    }
  }






  handleAllOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.allOS = true){
      this.selectedBoxOS = this.allOS;
      this.ByCardRangeOS = false;
      this.ByBranchOS = false;
    }
  }

  handleByCardRangeOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByCardRangeOS = true){
      this.selectedBoxOS = this.ByCardRangeOS;
      this.allOS = false;
      this.ByBranchOS = false;
    }
  }

  handleByBranchOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByBranchOS = true){
      this.selectedBoxOS = this.ByBranchOS;
      this.allOS = false;
      this.ByCardRangeOS = false;

    }
  }









  handleAllSAO(event){
    this.selectedBoxSAO = event.target.value;
    if(this.allSAO = true){
      this.selectedBoxSAO = this.allSAO;
      this.deptSAO = false;
      this.designSAO = false;
      this.sectionSAO = false;

    }
  }


  handleDeptSAO(event){
    this.selectedBoxSAO = event.target.value;
    if(this.deptSAO = true){
      this.selectedBoxSAO = this.deptSAO;
      this.allSAO = false;
      this.designSAO = false;
      this.sectionSAO = false;

    }
  }

  handleDesignSAO(event){
    this.selectedBoxSAO = event.target.value;
    if(this.designSAO = true){
      this.selectedBoxSAO = this.designSAO;
      this.allSAO = false;
      this.deptSAO = false;
      this.sectionSAO = false;
    }
  }

  handleSectionSAO(event){
    this.selectedBoxSAO = event.target.value;
    if(this.sectionSAO = true){
      this.selectedBoxSAO = this.sectionSAO;
      this.allSAO = false;
      this.deptSAO = false;
      this.designSAO = false;
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

        var imgWidth = 210;
       
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 80;
        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, 37)
        pdfData.save(`MyPdf.pdf`);
    });     
    }

  showReport(){
    this.showReportt = true;
    this.stopReport = false;
    console.log('Show Report');
    
  }

}
