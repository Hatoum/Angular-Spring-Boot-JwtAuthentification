import { Component, OnInit } from '@angular/core';
import {ClientService, Client } from './client.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  constructor(private service: ClientService) { }
 
  client: any;
  clients: Client[];
  messageForm = new FormGroup({
  username: new FormControl('', [Validators.required]),
  Adresse: new FormControl('', [Validators.required]),
  tel: new FormControl('', [Validators.required]),
  Service: new FormControl('', [Validators.required]),

  })

  ngOnInit() {
  

    this.service.getClient().subscribe(data => {
      this.clients = data
    })

  }
 

  Delete(ouvrierr) {
    this.service.deleteClient(ouvrierr)
      .subscribe(data => {
        this.clients = this.clients.filter(p => p !== ouvrierr);
        alert(" voulez vous supprimer ?");
      })
   
  }
}
