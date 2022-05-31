import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-allow-and-ded-reports-form',
  templateUrl: './allow-and-ded-reports-form.component.html',
  styleUrls: ['./allow-and-ded-reports-form.component.css']
})
export class AllowAndDedReportsFormComponent implements OnInit {

  specialAllowance;
  MealAllowance;
  travelAllowance;
  educationAllowance;
  accomodationAllowance;
  taxDeduction;
  rentDeduction;
  canteenDeduction;
  unionFund;


  selectedBox;


  AllOS;
  ByCardRangeOS;
  ByBranchOS;


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
    this.specialAllowance = true;
    this.MealAllowance = false;
    this.travelAllowance = false;
    this.educationAllowance = false;
    this.accomodationAllowance = false;
    this.taxDeduction = false;
    this.rentDeduction = false;
    this.canteenDeduction = false;
    this.unionFund = false;

    
    this.AllOS = true;
    this.ByCardRangeOS = false; 
    this.ByBranchOS = false;

    this.AllSAP = true;
    this.DeptSAP = false;
    this.DesignSAP = false;
    this.SectionSAP = false;




    this.showReportt = false;
    this.stopReport = true;

  }

  handleSpecialAllowance(event){
    this.selectedBox = event.target.value;
    if(this.specialAllowance = true){
      this.selectedBox = this.specialAllowance;
      this.MealAllowance = false;
      this.travelAllowance = false;
      this.educationAllowance = false;
      this.accomodationAllowance = false;
      this.taxDeduction = false;
      this.rentDeduction = false;
      this.canteenDeduction = false;

    }
  }

  handleMealAllowance(event){
    this.selectedBox = event.target.value;
    if(this.MealAllowance = true){
      this.selectedBox = this.MealAllowance;
      this.specialAllowance = false;
      this.travelAllowance = false;
      this.educationAllowance = false;
      this.accomodationAllowance = false;
      this.taxDeduction = false;
      this.rentDeduction = false;
      this.canteenDeduction = false;

    }
  }

  handleTravelAllowance(event){
    this.selectedBox = event.target.value;
    if(this.travelAllowance = true){
      this.selectedBox = this.travelAllowance;
      this.specialAllowance = false;
      this.MealAllowance = false;
      this.educationAllowance = false;
      this.accomodationAllowance = false;
      this.taxDeduction = false;
      this.rentDeduction = false;
      this.canteenDeduction = false;

    }
  }

  handleEducationAllowance(event){
    this.selectedBox = event.target.value;
    if(this.educationAllowance = true){
      this.selectedBox = this.educationAllowance;
      this.specialAllowance = false;
      this.MealAllowance = false;
      this.travelAllowance = false;
      this.accomodationAllowance = false;
      this.taxDeduction = false;
      this.rentDeduction = false;
      this.canteenDeduction = false;

    }

  }

  handleAccomodationAllowance(event){
    this.selectedBox = event.target.value;
    if(this.accomodationAllowance = true){
      this.selectedBox = this.accomodationAllowance;
      this.specialAllowance = false;
      this.MealAllowance = false;
      this.travelAllowance = false;
      this.educationAllowance = false;
      this.taxDeduction = false;
      this.rentDeduction = false;
      this.canteenDeduction = false;
    }
  }

  handleTaxDeduction(event){
    this.selectedBox = event.target.value;
    if(this.taxDeduction = true){
      this.selectedBox = this.taxDeduction;
      this.specialAllowance = false;
      this.MealAllowance = false;
      this.travelAllowance = false;
      this.educationAllowance = false;
      this.rentDeduction = false;
      this.canteenDeduction = false;
      this.accomodationAllowance = false;
    }
  }

  handleRentDeduction(event){
    this.selectedBox = event.target.value;
    if(this.rentDeduction = true){
      this.selectedBox = this.rentDeduction;
      this.specialAllowance = false;
      this.MealAllowance = false;
      this.travelAllowance = false;
      this.educationAllowance = false;
      this.canteenDeduction = false;
      this.taxDeduction = false;
      this.accomodationAllowance = false;
    }
  }

  handleCanteenDeduction(event){
    this.selectedBox = event.target.value;
    if(this.canteenDeduction = true){
      this.selectedBox = this.canteenDeduction;
      this.specialAllowance = false;
      this.MealAllowance = false;
      this.travelAllowance = false;
      this.educationAllowance = false;
      this.unionFund = false;
      this.rentDeduction = false;
      this.taxDeduction = false;
      this.accomodationAllowance = false;
    }
  }

  handleUnionFund(event){
    this.selectedBox = event.target.value;
    if(this.unionFund = true){
      this.selectedBox = this.unionFund;
      this.specialAllowance = false;
      this.MealAllowance = false;
      this.travelAllowance = false;
      this.educationAllowance = false;
      this.canteenDeduction = false;
      this.rentDeduction = false;
      this.taxDeduction = false;
      this.accomodationAllowance = false;
    }
  }





  handleAllOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.AllOS = true){
      this.selectedBoxOS = this.AllOS;
      this.ByBranchOS = false;
    }
  }

  handleByCardRangeOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByCardRangeOS = true){
      this.selectedBoxOS = this.ByCardRangeOS;
      this.AllOS = false;
      this.ByBranchOS = false;
    }
  }


  handleByBranchOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.ByBranchOS = true){
      this.selectedBoxOS = this.ByBranchOS;
      this.AllOS = false;
      this.ByCardRangeOS = false;
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
    if(this.DesignSAP = true){
      this.selectedBoxSAP = this.DesignSAP;
      this.AllSAP = false;
      this.DeptSAP = false;
      this.SectionSAP = false;
    }
  }

  handleSectionSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.SectionSAP = true){
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
