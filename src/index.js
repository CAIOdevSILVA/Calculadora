const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const deletedAll = document.querySelector(".deleteAll");
const previusNumber = document.querySelector(".previus-number");
const currentNumber = document.querySelector(".current-number");
const result = document.querySelector(".result");

class Calculator {
  constructor(previusNumberText, currentNumberText){
    this.previusNumberText = previusNumberText;
    this.currentNumberText = currentNumberText;
    this.clear();
    this.deleteItem();
  }

  clear(){
    deletedAll.addEventListener("click", () => {
      this.previusNumberText.innerText = " ";
      this.currentNumberText.innerText = " ";
    })
  }

  deleteItem(){
    const deleteNumber = document.querySelector(".delete");
    deleteNumber.addEventListener("click", () => {
      let element = this.currentNumberText.innerText;
      this.currentNumberText.innerText = element.toString().slice(0, -1);
    })
  }

  get chooseOperation(){
    const operator = this.operand;
    return operator;
  }

  calculate(){
    const operador = this.chooseOperation;
    const num1 = parseFloat(this.previusNumberText.innerText);
    const num2 = parseFloat(this.currentNumberText.innerText);

    if(operador.toString() == "+"){
      const result = Number(num1 + num2);
      this.previusNumberText.innerText = " "
      this.currentNumberText.innerText = `${result}`;
    }else if(operador.toString() == "-"){
      const result = Number(num1 - num2);
      this.previusNumberText.innerText = " "
      this.currentNumberText.innerText = `${result}`;
    }else if(operador.toString() == "*"){
      const result = Number(num1 * num2);
      this.previusNumberText.innerText = " "
      this.currentNumberText.innerText = `${result}`;
    }else if(operador.toString() == "/"){
      const result = Number(num1 / num2);
      this.previusNumberText.innerText = " "
      this.currentNumberText.innerText = `${result}`;
    }
  }


}

const calculator = new Calculator(previusNumber, currentNumber)


for( const number of  numbers) {
  number.addEventListener("click", () => {
    if(currentNumber.innerText == "" && number.innerText == ".") return
    
    calculator.currentNumberText.innerText = `${currentNumber.innerText}${number.innerText}`;
  })
}

for (const operator of operators){
  operator.addEventListener("click", () => {
    if(calculator.currentNumberText.innerText === "") return
    else{
      calculator.previusNumberText.innerText = `${currentNumber.innerText}${operator.innerText}`;
      calculator.currentNumberText.innerText = "";
      calculator.operand = operator.innerText;
      
    }
  })
}

result.addEventListener("click", () => {
  calculator.calculate();
})



