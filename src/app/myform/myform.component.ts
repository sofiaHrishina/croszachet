import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Matrix } from './Class/matrix';
import {matrixValidator} from './Service/matrixValidator';
import { Calculation } from './Service/calculation.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  matrixForm!: FormGroup;
  matrix!: Matrix;
  calculation: Calculation;
  result: boolean = false;
  isMagicSquare: boolean[] = [];
  @Output() magicSquareResult: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private alertController: AlertController) { 
    this.calculation = new Calculation();
    this. matrixForm = this.fb.group({
      matrixN: ['',[Validators.required]]
    });
  }
  
  onSubmit(){ 
    const n = parseFloat(this.matrixForm.value.matrixN);
    let valid = new  matrixValidator();
    if (valid.validateNumber(n)){
      this.matrix = new Matrix(n);
      console.log("Submit");
    }
    else {
      this.presentAlert('Ви ввели невірні дані для матриці')
    }
    
    
   }

  ngOnInit() {}
  async presentAlert(mesage:string){
    const alert = await this.alertController.create({
      header:'Помилка',
      subHeader: '',
      message: mesage,
      buttons: ['OK'],
    });
    await alert.present();
  }
  create_matrix(n:any){
    const n1 = parseFloat(n);
    this.calculation.arrays(n1);
    this.isMagicSquare = [];

    for (let i = 0; i < this.calculation.a.length; i++) {
      const isMagic = this.calculation.is_it_magicSquare(
        this.calculation.calculateRowSum(this.calculation.a[i]),
        this.calculation.calculateDiagonalSum(true),
        this.calculation.calculateColumnSum(i)
      );
      this.isMagicSquare.push(isMagic);
      for (let isMagic of this.isMagicSquare) {
        if (isMagic) {
          this.result = true;
          
        }
        else{
          this.result = false;
        }
        
      }
      this.magicSquareResult.emit(this.result);
    }
  }
  
}
