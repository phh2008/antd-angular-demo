import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray, ValidatorFn, AbstractControl} from '@angular/forms';
import {validRegExp} from '../../validator/validator-register';

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
    firstName: ['', [
      Validators.required,
      validRegExp('only', /^[1-9a-zA-Z_]+$/),
    ]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control(''),
    ]),
  });

  formErrors = {
    firstName: ''
  };

  //错误消息
  validationMessage = {
    firstName: {
      required: '姓名不能为空',
      minlength: '姓名长度最少为3个字符',
      maxlength: '姓名长度最多为10个字符',
      only: '姓名只能包含数字、字母、下划线',
    },
  };

  //getter
  get aliases() {
    return this.userForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

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

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    //遍历错误消息
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);
      if (control && control.dirty && !control.valid) {
        let msg = this.validationMessage[field];
        for (let key in control.errors) {
          this.formErrors[field] = msg[key] + ';';
        }
      }
    }
  }

  onKey(val) {
    this.values = val;
  }

  ngOnInit() {
    //表单数据发生变化时，更新错误信息
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

}
