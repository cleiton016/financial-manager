import { Component } from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'fm-input-text',
  standalone: true,
  imports: [FormsModule, SharedModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements ControlValueAccessor {
  inputValue?: string;

  writeValue(obj: string): void {
    this.inputValue = obj
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
