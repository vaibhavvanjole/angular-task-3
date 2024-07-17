import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api/messageservice';
import { SectionInfoModel } from '../shared/model/section-info.model';
import { SectionService } from '../shared/services/section.service';

@Component({
  selector: 'app-acco',
  templateUrl: './acco.component.html',
  styleUrls: ['./acco.component.css'],
})
export class AccoComponent implements OnInit {
  myForm : FormGroup | any;
  secListArray : any[]= [];

  constructor(private secServ : SectionService){
       this.secListArray = this.secServ.sectionDetailsList;
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      sectionHeader : new FormControl('', Validators.required),
      sectionDetails : new FormControl('', Validators.required)
    })
  }
  onSubmit(){
    console.log(this.myForm.value)
    const newData = new SectionInfoModel(this.myForm.value.sectionHeader, this.myForm.value.sectionDetails)
    this.secServ.getData(newData);
    this.myForm.reset();
  }
  
}
