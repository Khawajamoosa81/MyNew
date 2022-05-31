import { Store } from '@ngrx/store';
import { selectAllEmpcompanyinfo, selectEmployeeCompanyByCardRange } from './../../../../store/employee/empCompanyInf/empCompanyInf.selectors';
import { loadEmpcompanyinfo } from './../../../../store/employee/empCompanyInf/empCompanyInf.actions';
import { Component, OnInit, Input } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'smart-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.css']
})
export class EmpProfileComponent implements OnInit {

  @Input() cardStart;
  @Input() cardEnd;
  empCompInf;
  compInfo;
  @Input() appointmentSelector;

  emp:any;


  constructor(private store:Store<any>) { }

  ngOnInit() {

    if(this.appointmentSelector == true){
      this.store.dispatch(loadEmpcompanyinfo())
      this.empCompInf = this.store.select(selectAllEmpcompanyinfo);
      this.empCompInf.subscribe(val => {
        this.compInfo = val;
        
      })
    }

    else {
      this.empCompInf = this.store.select(selectEmployeeCompanyByCardRange, {startCard:this.cardStart,endCard:this.cardEnd})

      this.empCompInf.subscribe(compInf => {
        this.compInfo = compInf;
        
  
      })
    }


    this.emp = [
      {
      name: 'Khawaja Moosa',
      age: 23,
    },
    {
      name: 'Talha',
      age: 23,
    },
    {
      name: 'Ammar',
      age: 23,
    },
  
  ]

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

}
