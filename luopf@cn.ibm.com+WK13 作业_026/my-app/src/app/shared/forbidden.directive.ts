import { AbstractControl } from '@angular/forms';

export function isPoneAvailable(control: AbstractControl) {
  var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(control.value)) {
    return { errorMess: '请输入正确手机格式' };
  } else {
    return true
  }
}