import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-dept-wise-reports-form',
  templateUrl: './dept-wise-reports-form.component.html',
  styleUrls: ['./dept-wise-reports-form.component.css']
})
export class DeptWiseReportsFormComponent implements OnInit {

  empList;
  grade;
  shift;
  jobType;
  bloodGroup;
  martialStatus;
  gender;
  religion;
  employment;
  empCategory;
  qualification;
  secCode;
  missingPicList;
  seniorityList;
  perAppraisalSenior;
  perAppraisalJunior;


  AllOS;
  ByBranch;
  
  allSAP;
  deptSAP;
  DesignSAP;
  sectionSAP;

  selectedBox;
  selectedBoxOS;
  selectedBoxSAP;


  selectionOption;
  selectionOption2;




  showReportt;
  stopReport;

  constructor() { }

  ngOnInit() {

    this.empList = true;
    this.grade = false;
    this.jobType = false;
    this.bloodGroup = false;
    this.martialStatus = false;
    this.gender = false;
    this.religion = false;
    this.employment = false;
    this.empCategory = false;
    this.qualification = false;
    this.secCode = false;
    this.missingPicList = false;
    this.seniorityList = false;
    this.perAppraisalSenior = false;
    this.perAppraisalJunior = false;


    this.AllOS = true;
    this.ByBranch = false;
    this.allSAP = true;
    this.deptSAP = false;
    this.DesignSAP = false;
    this.sectionSAP = false;


    this.selectionOption = true;
    this.selectionOption2 = false;




    this.showReportt = false;
    this.stopReport = true;
  }

  handleEmpList(event){
    this.selectedBox = event.target.value;
    
    if(this.empList = true) {
      this.selectedBox = this.empList;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.gender = false;
      this.religion = false;
      this.employment = false;
      this.empCategory = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;
      this.qualification = false;

      this.selectionOption = true;
      this.selectionOption2 = false;

    }
  }

  handleGrade(event) {
    this.selectedBox = event.target.value;
    if(this.grade = true) {
      this.selectedBox = this.grade;
      this.empList = null;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.gender = false;
      this.religion = false;
      this.employment = false;
      this.empCategory = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;

    }
  }

  handleShift(event) {
    this.selectedBox = event.target.value;
    if(this.shift = true) {
      this.selectedBox = this.shift;
      this.empList = false;
      this.grade = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.gender = false;
      this.religion = false;
      this.employment = false;
      this.empCategory = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;

    }
  }

  handleJobType(event) {
    this.selectedBox = event.target.value;
    if(this.jobType = true) {
      this.selectedBox = this.jobType;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.gender = false;
      this.religion = false;
      this.employment = false;
      this.empCategory = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;

    }
  }

  handleBloodGroup(event) {
    this.selectedBox = event.target.value;
    if(this.bloodGroup = true) {
      this.selectedBox = this.bloodGroup;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.martialStatus = false;
      this.gender = false;
      this.religion = false;
      this.employment = false;
      this.empCategory = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;

    }
  }

  handleMartialStatus(event) {
    this.selectedBox = event.target.value;
    if(this.martialStatus = true) {
      this.selectedBox = this.martialStatus;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.gender = false;
      this.religion = false;
      this.employment = false;
      this.empCategory = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;
    }
  }

  handleGender(event) {
    this.selectedBox = event.target.value;
    if(this.gender = true) {
      this.selectedBox = this.gender;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.empCategory = false;
      this.religion = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;
     

    }
  }

  handleReligion(event) {
    this.selectedBox = event.target.value;
    if(this.religion = true) {
      this.selectedBox = this.religion;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.empCategory = false;
      this.gender = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;
    }
  }

  handleEmployment(event){
    this.selectedBox = event.target.value;
    if(this.employment = true) {
      this.selectedBox = this.employment;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.empCategory = false;
      this.religion = false;
      this.gender = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;
    }
  }

  handleEmpCategory(event){
    this.selectedBox = event.target.value;
    if(this.empCategory = true) {
      this.selectedBox = this.empCategory;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.religion = false;
      this.gender = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;
    }
  }

  handleQualification(event){
    this.selectedBox = event.target.value;
    if(this.qualification = true) {
      this.selectedBox = this.qualification;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.religion = false;
      this.gender = false;
      this.empCategory = false;
      this.secCode = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;

    }
   
  }

  handleSectionCode(event){
    this.selectedBox = event.target.value;
    if(this.secCode = true){
      this.selectedBox = this.secCode;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.religion = false;
      this.gender = false;
      this.empCategory = false;
      this.qualification = false;
      this.missingPicList = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;

    }
  }

  handleMissingPicList(event){
    this.selectedBox = event.target.value;
    if(this.missingPicList = true){
      this.selectedBox = this.missingPicList;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.religion = false;
      this.gender = false;
      this.empCategory = false;
      this.qualification = false;
      this.seniorityList = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;

    }
  }

  handleSeniorityList(event){
    this.selectedBox = event.target.value;
    if(this.seniorityList = true){
      this.selectedBox = this.seniorityList;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.religion = false;
      this.gender = false;
      this.empCategory = false;
      this.qualification = false;
      this.perAppraisalSenior = false;
      this.perAppraisalJunior = false;


      this.selectionOption = true;
      this.selectionOption2 = false;
    }
  }

  handlePerAppraisalSenior(event){
    this.selectedBox = event.target.value;
    if(this.perAppraisalSenior = true){
      this.selectedBox = this.perAppraisalSenior;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.religion = false;
      this.gender = false;
      this.empCategory = false;
      this.qualification = false;
      this.perAppraisalJunior = false;
      this.seniorityList = false;

      this.selectionOption = false;
      this.selectionOption2 = true;

      

    }
  }


  handlePerAppraisalJunior(event){
    this.selectedBox = event.target.value;
    if(this.perAppraisalJunior = true){
      this.selectedBox = this.perAppraisalJunior;
      this.empList = false;
      this.grade = false;
      this.shift = false;
      this.jobType = false;
      this.bloodGroup = false;
      this.martialStatus = false;
      this.employment = false;
      this.religion = false;
      this.gender = false;
      this.empCategory = false;
      this.qualification = false;

      this.selectionOption = false;
      this.selectionOption2 = true;

      

    }
  }

  handleAllOS(event) {
    this.selectedBoxOS = event.target.value;
    if (this.AllOS = true) {
      this.selectedBoxOS = this.AllOS;
      this.ByBranch = false;
    }
  }

  handleByBranchOS(event){
    
    this.selectedBoxOS = event.target.value;
    
    if(this.ByBranch = true) {
      this.selectedBoxOS = this.ByBranch;
      this.AllOS = false;
    }
  
  }

  handleAllSAO(event){
    
    this.selectedBoxSAP = event.target.value;
    
    if(this.allSAP = true) {
      this.selectedBoxSAP = this.allSAP;
      this.deptSAP = false;
      this.DesignSAP = false;
      this.sectionSAP = false;

    }
  }

  handleDepSAP(event) {
    
    this.selectedBoxSAP = event.target.value;

    if(this.deptSAP = true) {
      this.selectedBoxSAP = this.deptSAP;
      this.allSAP = false;
      this.DesignSAP = false;
      this.sectionSAP = false;
    }

  }

  handleDesignationSAP(event){
    
    this.selectedBoxSAP = event.target.value;
    
    if (this.DesignSAP = true) {
      this.selectedBoxSAP = this.DesignSAP;
      this.allSAP = false;
      this.deptSAP = false;
      this.sectionSAP = false;

    }
  }

  handleSectionSAP(event){
    this.selectedBoxSAP = event.target.value;
    if(this.sectionSAP = true) {
      this.selectedBoxSAP = this.sectionSAP;
      this.allSAP = false;
      this.deptSAP = false;
      this.DesignSAP = false;
    }
  }

  handleCardRangeOS2(event){
    
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
