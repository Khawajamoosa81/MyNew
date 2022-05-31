import { selectAllEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.selectors';
import { loadEmployeesalarycombined } from './../../../../store/employee/EmployeeSalaryCombine/EmployeeSalaryCombine.actions';
import { loadEmpsalary, selectAllEmpsalary } from 'src/app/features/store/salary/empSalar';
import { selectAllEmpcompanyinfo, loadEmpcompanyinfo } from 'src/app/features/store/employee/empCompanyInf';
import { selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-emp-sal-log',
  templateUrl: './emp-sal-log.component.html',
  styleUrls: ['./emp-sal-log.component.css']
})
export class EmpSalLogComponent implements OnInit {

  empsal;
  empCompInf;
  compInfo;
  empSalar;
  @Input() cardStart;
  @Input() cardEnd;
  @Input() appointmentSelector;
  @Input() button;
  @Input() operationSelectorByCard;

  empSal;
  slides;
  slideIndex;
  arrows;
  s;
  dots;
  

  constructor(private store:Store<any>) { }

  
  ngOnInit() {

    


    if(this.appointmentSelector == true){

      this.store.dispatch(loadEmployeesalarycombined());

      this.empsal = this.store.select(selectAllEmployeesalarycombined);

      this.empsal.subscribe(emp => {
        this.empSalar = emp;
        console.log(this.empSalar);
      })

      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
      })

    }

    else {

      this.empsal = this.store.select(selectAllEmployeesalarycombined);

      this.empsal.subscribe(emp => {
        this.empSalar = emp;
        console.log(this.empSalar);
      })

      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
        
  
      })
    }

    

  }

  trackByData(index:number, studentArr:any): number { 
    return studentArr.id; 
 }


  makePDF():void {
    let DATA = document.getElementById('htmlDataSal');
  
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

        var imgWidth = 290;
       
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 0
        pdfData.addImage(contentDataURL, 'PNG', -65, position, imgWidth, imgHeight)
        pdfData.save(`MyPdf.pdf`);
    });     
    }


  
}
