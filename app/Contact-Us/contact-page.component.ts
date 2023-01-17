import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
  
    this.contactForm=this.formBuilder.group({

         name:['',[Validators.required,Validators.minLength(4)]],
         email:['',[Validators.required,Validators.email]],
         number:['',[Validators.required,Validators.max(10)]],
         query:['',[Validators.required,Validators.minLength(4)]],        
    })
  }

  get name(){
    return this.contactForm.get("name");
  }
  get email(){
    return this.contactForm.get("email");
  }
  get number(){
    return this.contactForm.get("number");
  }
  get query(){
    return this.contactForm.get("query");
  }

  ngOnInit(): void {
    
  } 
  onSubmit(){
    console.log(this.contactForm.value);
  }
  

}
