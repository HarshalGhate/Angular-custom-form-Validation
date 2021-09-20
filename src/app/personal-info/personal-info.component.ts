import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent 
{
  userInfo: any;
  states:any= [
    {name: 'Maharashtra', abbrev: 'AZ'},
    {name: 'Gujarat', abbrev: 'CA'},
    {name: 'Pradesh Uttar', abbrev: 'CO'}
    ];
 

  constructor(private formBuilder: FormBuilder) 
  {
    
    this.userInfo = this.formBuilder.group({
      fname: ['', [Validators.required,ValidationService.nameValidator]],
      lname: ['', [Validators.required,ValidationService.nameValidator]],
      email: ['',[Validators.required,ValidationService.emailValidator]],
      phone:['',[Validators.required,ValidationService.phoneValidator]],
      city:['',[Validators.required,ValidationService.cityValidator,Validators.minLength(4)]],
      state:['',[Validators.required]],
      zip:['',[Validators.required,ValidationService.zipValidator]],
      address:['',[Validators.required]],
      comment:['',[Validators.minLength(30)]]
    });

    console.log(this.userInfo);
  }

  saveUser() 
  {
    if (this.userInfo.dirty && this.userInfo.valid) 
    {
      alert(`Name: ${this.userInfo.value.fname} ${this.userInfo.value.lname} Email: ${this.userInfo.value.email}`);
    }
  }


  

  ngOnInit(): void {
  }

}
