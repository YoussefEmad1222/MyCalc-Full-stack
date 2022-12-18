import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  @Output () onClickNum = new EventEmitter<string>();
  @Output () onClickOperator = new EventEmitter<string>();
  @Output() onClickEqual = new EventEmitter();
  ngOnInit(): void {
  }
  writeNumber(values: string){
    this.onClickNum.emit(values);
  }
  operat(values: string){
   this.onClickOperator.emit(values);
  }
  equal(){
    this.onClickEqual.emit();
  }
}
