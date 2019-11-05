import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { OuvrierService, Ouvrier } from './ouvrier.service';

@Component({
  selector: 'app-ajout-ouvrier',
  templateUrl: './ajout-ouvrier.component.html',
  styleUrls: ['./ajout-ouvrier.component.scss']
})
export class AjoutOuvrierComponent implements OnInit {

  submitted = false;
  success = false;
  ouvrier: any;
  ouvriers: Ouvrier[];
  messageForm = new FormGroup({
  username: new FormControl('', [Validators.required]),
  Adresse: new FormControl('', [Validators.required]),
  tel: new FormControl('', [Validators.required]),
  Typedouvrier: new FormControl('', [Validators.required]),
  Service: new FormControl('', [Validators.required]),

  })
 
  constructor(private service: OuvrierService,) { }

  ngOnInit() {
  
    }
    onSubmit() {
      
      this.submitted = true;
  
      if (this.messageForm.invalid) {
        return;
      }
  
      this.success = true;
      this.service. addOuvrier(this.messageForm.value).subscribe(
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

