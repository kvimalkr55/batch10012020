import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
   myobj;
   tdy = new Date();
   title = 'my-first-app'; 
employeeForm: FormGroup
  constructor() {
    this.myobj = { fname : 'yogesh', lname : 'sharma' }
   }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
    })
  }

  onSubmit(){
    console.log(this.employeeForm.value);
  }

}
