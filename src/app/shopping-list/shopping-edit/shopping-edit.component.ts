import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() incredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    this.incredientAdded.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
    console.log('Test');
  }
}
