export class Calculation {
  a: number[][] = [];
  n: number = 0;
  colors: string[];

  constructor() {
    this.colors = [];
  }

  calculateRowSum(row: number[]): number {
    return row.reduce((sum, num) => sum + num, 0);
  }

  calculateColumnSum(columnIndex: number): number {
    let sum = 0;
    for (let i = 0; i < this.n; i++) {
      sum += this.a[i][columnIndex];
    }
    return sum;
  }

  calculateDiagonalSum(isMainDiagonal: boolean): number {
    let sum = 0;
    if (isMainDiagonal) {
      for (let i = 0; i < this.n; i++) {
        sum += this.a[i][i];
      }
    } else {
      for (let i = 0; i < this.n; i++) {
        sum += this.a[i][this.n - i - 1];
      }
    }
    return sum;
  }
  is_it_magicSquare(sum1:number,sum2:number,sum3:number):boolean {
    if (sum1 == sum2 || sum1 == sum3){
      return true;
    }
    else {
      return false;
    }
  }
  arrays(n: any) {
    try {
      this.n = parseInt(n);
      this.a = [];
      console.log("Array created");
      for (let i = 0; i < this.n; i++) {
        this.a[i] = [];
        for (let j = 0; j < this.n; j++) {
          const digit = Math.floor(Math.random() * 10) + 1;
          this.a[i][j] = digit;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
 
}