import { ReportsFormComponent } from './reports-form/reports-form.component';
import { selectAllvisitors } from './../../store/visitors/visitors.selectors';
import { addvisitors, deletevisitors, loadvisitors } from './../../store/visitors/visitors.actions';
import { visitors } from './../../store/visitors/visitors';
import { Store } from '@ngrx/store';
import { selectCurrentcategory, selectAllcategory, category, loadcategory, deletecategory } from './../../store/assets/category';
import { RowData } from 'src/app/shared';
import { Validators } from '@angular/forms';
import { interval, Observable, Subscription } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DialogsService } from '../../../shared/dialogs/dialogs.service';
import { type } from '../../store/assets/type';
import { assetsInfo, selectAllassetsInfo, loadassetsInfo, deleteassetsInfo, selectByStatusT, selectByStatusF } from '../../store/assets/assetsInfo';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'smart-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  subscription:Subscription;
  title = "Hi! i am parent Component";

  @Input() deleteMessage = 'Do you wish to delete this';
  

  constructor(private modalService: BsModalService, private store: Store<any>, private dialogService: DialogsService,private toastr: ToastrService) { }

  ngOnInit() {
   

  }




}
