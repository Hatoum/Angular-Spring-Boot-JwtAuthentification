import { Component, OnInit } from '@angular/core';
import {ClientService, Client } from './client.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.scss']
})
export class AjoutClientComponent implements OnInit {

  constructor(private service: ClientService) { }
  submitted = false;
  success = false;
  client: any;
  clients: Client[];
  messageForm = new FormGroup({
  username: new FormControl('', [Validators.required]),
  Adresse: new FormControl('', [Validators.required]),
  tel: new FormControl('', [Validators.required]),
  Service: new FormControl('', [Validators.required]),

  })

  ngOnInit() {
  }
  onSubmit() {
    
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
    this.service. addClient(this.messageForm.value).subscribe(
      data => {
        if (data) {

        }


      },
      err => {
        console.log("error sending data")
      },
      () => {
        alert("Confirmez?")
        console.log("data sent")
      }



    )
   
  }

  
}

