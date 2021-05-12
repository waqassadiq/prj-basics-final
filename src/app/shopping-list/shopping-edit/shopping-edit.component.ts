import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName', {static: false}) inputNameRef: ElementRef;
  @ViewChild('inputAmount', {static: false}) inputAmountRef: ElementRef;
 // ingredientAdded = new EventEmitter<{name:string, amout:number}>();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
