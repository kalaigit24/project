import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { Pindata } from './data';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent {
  MessageFormData: FormGroup;
  customerdata: any[] = Pindata; // Assigning initial data from imported file

  trackedCustomerData: any[] = []; 
  @ViewChild('deleteModal', { static: false }) deleteModal?: ModalDirective;

  constructor(private modalService: BsModalService,private location: Location) {
    this.MessageFormData = new FormGroup({
      'ids': new FormControl(''),
  
      'name': new FormControl(''),
      'Collaborators': new FormControl(''),
      'Privacy': new FormControl('')
    });

    this.customerdata = Pindata;
  }

 
  saveCategory() {
    if (this.MessageFormData.valid) {
    const name = this.MessageFormData.get('name')?.value;
    const Collaborators = this.MessageFormData.get('Collaborators')?.value;
    const Privacy = this.MessageFormData.get('Privacy')?.value;
    Pindata.push({
      id: '',
      img: '',
      Title: name,
      Privacy:Privacy,
      Collaborators: Collaborators
    });

   
    }
    this.deleteModal?.hide();
  }
  goBack() {
    this.location.back();
  }

}
