import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, UntypedFormGroup } from '@angular/forms';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { customerdata } from './data'; // Importing customerdata from external file
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  MessageFormData: FormGroup;
  customerdata: any[] = customerdata; // Assigning initial data from imported file

  trackedCustomerData: any[] = []; 
  countries: { code: string, name: string ,region:string}[] = [];
  @ViewChild('deleteModal', { static: false }) deleteModal?: ModalDirective;

  constructor(private modalService: BsModalService,private http: HttpClient,private router: Router) {
    this.MessageFormData = new FormGroup({
      'ids': new FormControl(''),
      'name': new FormControl(''),
      'email': new FormControl(''),
      'region': new FormControl(''), 
      'country': new FormControl('')
    });

    this.customerdata = customerdata;
  }

  ngOnInit(): void {
    this.http.get<any>('https://api.first.org/data/v1/countries').subscribe(data => {
      this.countries = Object.keys(data.data).map(key => ({
        code: key,
        name: data.data[key].country,
        region: data.data[key].region
      }));
    });
  }

  saveCategory() {
    if (this.MessageFormData.valid) {
    const name = this.MessageFormData.get('name')?.value;
    const email = this.MessageFormData.get('email')?.value;
    const Country = this.MessageFormData.get('country')?.value;
    const region = this.MessageFormData.get('region')?.value;
    customerdata.push({
      id: '',
      name: name,
      email: email,
      region:region,
      country: Country
    });
    }
    this.deleteModal?.hide();
  }

  navigateToPinPage() {
    this.router.navigate(['/pin']); // Replace '/pin' with the desired route
  }
  
}
