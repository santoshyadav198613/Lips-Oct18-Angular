import { AbstractControl } from '@angular/forms';


export class CustomValidator {

    static validatePin(control: AbstractControl) {
        if (control.value.length < 6 || control.value.length > 10) {
                return { validPin: false };
        }
        return null;
    }
}
