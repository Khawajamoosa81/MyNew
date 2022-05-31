import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'smart-evaluation-reports-form',
  templateUrl: './evaluation-reports-form.component.html',
  styleUrls: ['./evaluation-reports-form.component.css']
})
export class EvaluationReportsFormComponent implements OnInit {




  EmpEvalForm;

  

  selectedBox;




  allOS;
  byGradeOS;
  byCardRangeOS;


  
  selectedBoxOS;


  AllSAD;
  DeptSAD;
  DesignSAD;
  SectionSAD;

  
  selectedBoxSD;
  


  showReportt;
  stopReport;


  constructor() { }

  ngOnInit() {


    this.EmpEvalForm = true;




    this.allOS = true;
    this.byGradeOS = false;
    this.byCardRangeOS = false;




    this.AllSAD = true;
    this.DeptSAD = false;
    this.DesignSAD = false;
    this.SectionSAD = false;



    this.showReportt = false;
    this.stopReport = true;

  }



  handleEmpEvalForm(event){
    this.selectedBox = event.target.value;
    if(this.EmpEvalForm = true){
      this.selectedBox = this.EmpEvalForm;
    }
  }





  handleAllOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.allOS = true){
      this.selectedBoxOS = this.allOS;
      this.byGradeOS = false;
      this.byCardRangeOS = false;

    }
  }

  handleByGradeOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.byGradeOS = true){
      this.selectedBoxOS = this.byGradeOS;
      this.allOS = false;
      this.byCardRangeOS = false;
    }
  }

  handleByCardRangeOS(event){
    this.selectedBoxOS = event.target.value;
    if(this.byCardRangeOS = true){
      this.selectedBoxOS = this.byCardRangeOS;
      this.allOS = false;
      this.byGradeOS = false;
    }
  }








  handleAllSAD(event){
    this.selectedBoxSD = event.target.value;
    if(this.AllSAD = true){
      this.selectedBoxSD = this.AllSAD;
      this.DeptSAD = false;
      this.DesignSAD = false;
      this.SectionSAD = false;

    }
  }


  handleDeptSAD(event){
    this.selectedBoxSD = event.target.value;
    if(this.DeptSAD = true){
      this.selectedBoxSD = this.DeptSAD;
      this.AllSAD = false;
      this.DesignSAD = false;
      this.SectionSAD = false;

    }
  }

  handleDesignSAD(event){
    this.selectedBoxSD = event.target.value;
    if(this.DesignSAD = true){
      this.selectedBoxSD = this.DesignSAD;
      this.AllSAD = false;
      this.DeptSAD = false;
      this.SectionSAD = false;
    }
  }


  handleSectionSAD(event){
    this.selectedBoxSD = event.target.value;
    if(this.SectionSAD = true){
      this.selectedBoxSD = this.SectionSAD;
      this.AllSAD = false;
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
