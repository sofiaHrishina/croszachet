import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class matrixValidator {
  constructor() { }

  validateNumber(value: any): boolean {
    if (typeof value !== 'number' || isNaN(value)) {
      return false; 
    }

    return value >= 1 && value <= 10;
  }
}