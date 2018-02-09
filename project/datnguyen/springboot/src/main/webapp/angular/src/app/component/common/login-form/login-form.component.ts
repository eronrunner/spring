import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { LoginComponent } from '../../page/login/login.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() title: String = "Form";
  @Input() submitText: String = "Submit";
  form: FormGroup;
  userName: FormControl;
  password: FormControl;
  searchs: String[] = [];

  @Output() clickSubmit = new EventEmitter<LoginComponent>();

  constructor() { }

  ngOnInit() {
    this.creatFormControls();
    this.userName.valueChanges.debounceTime(400).distinctUntilChanged().subscribe(term => {
      this.searchs.push(term);
    }); 
    this.createForm();
  }

  creatFormControls(){
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, 
      Validators.minLength(8)]
    );
  }

  createForm(){
    this.form = new FormGroup({
      userName: this.userName,
      password: this.password,
    });
  }

  onSubmit(){
    if(this.form.valid){
      this.clickSubmit.emit(this.form.value);
      // this.form.reset();
    }
  }
}
