import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fm-input-animated',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './input-animated.component.html',
  styleUrl: './input-animated.component.scss'
})
export class InputAnimatedComponent implements ControlValueAccessor {
  isFocused = false;
  inputValue: string = '';
  label = input.required<string>();
  isDisabled = false;

  private ngControl = inject(NgControl, { optional: true });
  protected ngOnTouched?: () => void;
  protected ngOnChange?: (value: any) => void;

  constructor() {
    if (this.ngControl) this.ngControl.valueAccessor = this;
  }
  onFocus(): void { this.isFocused = true; this.ngOnTouched?.(); }

  onBlur(): void { this.isFocused = !this.inputValue? false : true; }

  writeValue(obj: any): void { this.inputValue = obj; }

  registerOnChange(fn: any): void { this.ngOnChange = fn; }

  registerOnTouched(fn: any): void { this.ngOnTouched = fn; }

  setDisabledState?(isDisabled: boolean): void { this.isDisabled = isDisabled; }
}
