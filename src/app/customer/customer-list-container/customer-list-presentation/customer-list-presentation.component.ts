import { Component, Input, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { customerForm } from '../../customer.model';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-list-presentation',
  templateUrl: './customer-list-presentation.component.html',
  styleUrls: ['./customer-list-presentation.component.scss']
})
export class CustomerListPresentationComponent implements OnInit {

  private _customerList: customerForm[];

  @Input() set customerList(value: customerForm[] | null ){
    if (value){
      this._customerList = value
    }
  }

  public get customerList(): customerForm[] | null {
    return this._customerList
  }

  constructor(private customerService: CustomerService) { 
    this._customerList = [];
  }

  ngOnInit(): void {
  
  }
}
