import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {isPoneAvailable} from '../shared/forbidden.directive'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  form = {
    name: '',
    gender: '',
    phone: '',
    email: ''
  }
  validationMessage:any = {
    name: {
      'required':'姓名为必填选项',
    },
    phone: {
      'errorMess': '手机号码格式错误'
    },
    email: {
      'required': 'Email 为必填选项',
      'email': 'Email 格式错误'
    }
  }
  formErrors: any = {
    name: '',
    phone:'',
    email: ''
  };
  profileForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.buildForm();
  }
  buildForm(): void {
    this.profileForm = this.fb.group({
      name: [this.form.name, [Validators.required]],
      gender: [this.form.gender],
      phone: [this.form.phone, [isPoneAvailable]],
      email: [this.form.email, [
        Validators.required,
        Validators.email,
      ]]
    });
  }

  onValueChanged(data?: any) {
    if (!this.profileForm) return;
    const form = this.profileForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);    
      if (control && !control.valid) {
        const messages = this.validationMessage[field];
        for (const key in control.errors) {        
          this.formErrors[field] += messages[key] + '\n';
        }
      }
    }
  }
}
