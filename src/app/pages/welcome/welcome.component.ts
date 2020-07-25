import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  values = '';

  //响应式表单
  userForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  updateProfile() {
    this.userForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  onKey(val) {
    this.values = val;
  }

  ngOnInit() {
  }

}
