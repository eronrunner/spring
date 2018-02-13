import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registered-account-form',
  templateUrl: './registered-account-form.component.html',
  styleUrls: ['./registered-account-form.component.css']
})
export class RegisteredAccountFormComponent implements OnInit {
  @Input() title : string = "Registered Form";
  @Input() submitText : string = "Submit";
  @Output() clickSubmit = new EventEmitter();
  @Input() passMin = 8;
  @Input() passMax = 100;
  @Input() usernameMin = 6;
  @Input() usernameMax = 100;
  form : FormGroup = new FormGroup({});;
  username: FormControl;
  password: FormControl;
  email: FormControl;
  accountExist: boolean = false;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.username = new FormControl('', [Validators.required, Validators.minLength(this.usernameMin), Validators.maxLength(this.usernameMax)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(this.passMin), Validators.maxLength(this.passMax)]);
    this.email = new FormControl('', [Validators.required]);
  }

  createForm(){
    this.form = new FormGroup({
      username : this.username,
      password : this.password,
      email : this.email
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.clickSubmit.emit(this.form.value);
    }
  }
}
