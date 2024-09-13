import { Component, inject } from '@angular/core';
import { InputDirective } from '@directives/input.directive';
import { InputAnimatedComponent } from "../../../shared/components/inputs/input-animated/input-animated.component";
import { ButtonComponent } from "../../../shared/components/buttons/button/button.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'fm-expenses',
  standalone: true,
  imports: [InputDirective, InputAnimatedComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    name: [null, Validators.requiredTrue, Validators.minLength(3)],
    value: [''],
    date: [''],
  });


  onSubmit() {
    console.log(this.form);
  }
}
