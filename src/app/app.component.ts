import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  operand1: string = '';
  operand2: string = '';
  curr_operand: string = '';
  is_operand1: boolean = true;
  operation1: string = '';
  operation: string = '';
  isValidoperation: boolean = true;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  writeNumber(value: string): void {
    if (this.is_operand1) {
      if (!isNaN(Number(this.operand1 + value))) {
        this.operand1 += value;
        this.curr_operand = this.operand1;
        this.isValidoperation = true;
      }
    } else {
      if (!isNaN(Number(this.operand1 + value))) {
        this.operand2 += value;
        this.curr_operand = this.operand2;
        this.isValidoperation = true;
      }
    }
  }

  operat(value: string): void {
    switch (value) {
      case '+':
        if (this.isValidoperation && this.is_operand1 && this.operand1 != '') {
          this.operation = 'add';
          this.operation1 = '+';
          this.is_operand1 = false;
          this.curr_operand = '';
          this.operand2 = '';
        }
        break;
      case '-':
        if (this.isValidoperation && this.is_operand1 && this.operand1 != '') {
          this.operation = 'sub';
          this.operation1 = '-';
          this.is_operand1 = false;
          this.curr_operand = '';
          this.operand2 = '';
        }
        break;
      case 'x':
        if (this.isValidoperation && this.is_operand1 && this.operand1 != '') {
          this.operation = 'mult';
          this.operation1 = 'x';
          this.is_operand1 = false;
          this.curr_operand = '';
          this.operand2 = '';
        }
        break;
      case '/':
        if (this.isValidoperation && this.is_operand1) {
          this.operation = 'div';
          this.operation1 = '/';
          this.is_operand1 = false;
          this.curr_operand = '';
          this.operand2 = '';
        }
        break;
      case '1/x':
        this.operation = 'inv';
        if (this.curr_operand == '' || this.curr_operand == '0') {
          this.isValidoperation = false;
          this.curr_operand = 'error press C to continue';
        } else {
          if (this.is_operand1) {
            this.curr_operand = this.operand1;
            this.operand2 = 'empty';
          } else {
            this.curr_operand = this.operand2;
          }
          this.http
            .get(
              `http://localhost:8080/calculate/${this.operand1}/${this.operand2}/${this.operation}/${this.curr_operand}/${this.is_operand1}/${this.isValidoperation}`
            )
            .subscribe((response) => {
              this.curr_operand = response.toString();
              if (this.is_operand1) {
                this.operand1 = this.curr_operand;
              } else {
                this.operand2 = this.curr_operand;
              }
              console.log(response);
            });
        }
        break;
      case '%':
        if (this.isValidoperation) {
          if (this.is_operand1) {
            this.curr_operand = this.operand1;
            this.operand2 = 'empty';
          } else {
            this.curr_operand = this.operand2;
          }
          var temp = this.operation;
          this.operation = 'percent';
          this.http
            .get(
              `http://localhost:8080/calculate/${this.operand1}/${this.operand2}/${this.operation}/${this.curr_operand}/${this.is_operand1}/${this.isValidoperation}`
            )
            .subscribe((response) => {
              this.curr_operand = response.toString();
              if (this.is_operand1) {
                this.operand1 = this.curr_operand;
              } else {
                this.operand2 = this.curr_operand;
              }
              console.log(response);
            });
          this.operation = temp.toString();
        }
        break;
      case '^2':
        if (this.isValidoperation) {
          if (this.is_operand1) {
            this.curr_operand = this.operand1;
            this.operand2 = 'empty';
          } else {
            this.curr_operand = this.operand2;
          }
          var temp = this.operation;
          this.operation = 'sqr';
          this.http
            .get(
              `http://localhost:8080/calculate/${this.operand1}/${this.operand2}/${this.operation}/${this.curr_operand}/${this.is_operand1}/${this.isValidoperation}`
            )
            .subscribe((response) => {
              this.curr_operand = response.toString();
              if (this.is_operand1) {
                this.operand1 = this.curr_operand;
              } else {
                this.operand2 = this.curr_operand;
              }
              console.log(response);
            });
          this.operation = temp.toString();
        }
        break;
      case 'sqrt':
        if (Number(this.curr_operand) < 0) {
          this.isValidoperation = false;
          this.curr_operand = 'error press C to continue';
        }
        if (this.isValidoperation) {
          if (this.is_operand1) {
            this.curr_operand = this.operand1;
            this.operand2 = 'empty';
          } else {
            this.curr_operand = this.operand2;
          }
          var temp = this.operation;
          this.operation = 'sqrt';
          this.http
            .get(
              `http://localhost:8080/calculate/${this.operand1}/${this.operand2}/${this.operation}/${this.curr_operand}/${this.is_operand1}/${this.isValidoperation}`
            )
            .subscribe((response) => {
              this.curr_operand = response.toString();
              if (this.is_operand1) {
                this.operand1 = this.curr_operand;
              } else {
                this.operand2 = this.curr_operand;
              }
              console.log(response);
            });
          this.operation = temp.toString();
        }
        break;
      case '+/-':
        if (this.isValidoperation) {
          if (this.is_operand1) {
            this.curr_operand = this.operand1;
            this.operand2 = 'empty';
          } else {
            this.curr_operand = this.operand2;
          }
          var temp = this.operation;
          this.operation = 'rev';
          this.http
            .get(
              `http://localhost:8080/calculate/${this.operand1}/${this.operand2}/${this.operation}/${this.curr_operand}/${this.is_operand1}/${this.isValidoperation}`
            )
            .subscribe((response) => {
              this.curr_operand = response.toString();
              if (this.is_operand1) {
                this.operand1 = this.curr_operand;
              } else {
                this.operand2 = this.curr_operand;
              }
              console.log(response);
            });
          this.operation = temp.toString();
        }
        break;
      case 'C':
        this.curr_operand = '';
        this.operand1 = '';
        this.operation1 = '';
        this.operation = '';
        this.is_operand1 = true;
        this.isValidoperation = true;
        break;
      case 'CE':
        this.curr_operand = '';
        if (this.is_operand1) {
          this.operand1 = '';
        } else {
          this.operand2 = '';
        }
        break;
      case 'back':
        if (this.is_operand1) {
          this.curr_operand = this.curr_operand.substring(
            0,
            this.curr_operand.length - 1
          );
          this.operand1 = this.curr_operand;
        } else {
          this.curr_operand = this.curr_operand.substring(
            this.curr_operand.length - 1
          );
          this.operand2 = this.curr_operand;
        }
        break;
    }
  }

  equal(): void {
    if (
      this.operation1 == '/' &&
      (this.operand2 == null || this.operand2 == '' || this.operand2 == '0')
    ) {
      this.curr_operand = 'error press C to continue';
      this.isValidoperation = false;
    }
    if (this.isValidoperation) {
      this.http
        .get(
          `http://localhost:8080/calculate/${this.operand1}/${this.operand2}/${this.operation}/${this.curr_operand}/${this.is_operand1}/${this.isValidoperation}`
        )
        .subscribe((response) => {
          this.curr_operand = response.toString();
          this.operand1 = this.curr_operand;
          this.operation = '';
          this.operation1 = '';
          this.is_operand1 = true;
          console.log(response);
        });
    }
  }
  title = 'MyCalc';
}
