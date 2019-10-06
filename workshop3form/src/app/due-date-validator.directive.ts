import { Directive } from "@angular/core";
import { NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[validDueDate]',
    providers: [{
        provide: NG_VALIDATORS, useExisting: DueDateValidator, multi: true
    }]
})

export class DueDateValidator {

   // This method is the one required by the Validator interface
    validate(c: FormControl): ValidationErrors | null {
    // Here we call our static validator function 
    return DueDateValidator.validateDueDate(c);
    }

    static validateDueDate(control: FormControl): ValidationErrors {
        if (control.value < new Date().setHours(0,0,0,0)) {
            return {dueDate : 'Due date cannot be before today'};
        }
        // If no error, return null  
        return null;
    }
}