class Calculator{
    #num1 = 0;
    #num2 = 0;
    #editing = 0;
    #resultTrigger = 0;
    #operation;
    #result;
    constructor(){

    }

    //getter e setters
    getNum1(){
        return this.#num1
    }
    getNum2(){
        return this.#num2
    }
    getOperation(){
        return this.#operation
    }
    getEditing(){
        return this.#editing
    }
    getResult(){
        return this.#result
    }
    getResultTrigger(){
        return this.#resultTrigger
    }
    setNum1(num){
        this.#num1 = num
    }
    setNum2(num){
        this.#num2 = num
    }
    setEditing(editing){
        this.#editing = editing
    }
    setResultTrigger(trigger){
        this.#resultTrigger = trigger
    }
    setOperation(operation){
        this.#operation = operation
    }
    setResult(result){
        this.#result = result
    }
    switchEditing(){
        if (this.getEditing(0) === 0){
            this.setEditing(1)
        }else{
            this.setEditing(0)
        }
    }

    somar(){
        this.setOperation(0)
    }
    subtrair(){
        this.setOperation(1)
    }
    multiplicar(){
        this.setOperation(2)
    }
    dividir(){
        this.setOperation(3)
    }

    newOperation(){
        if(this.getResultTrigger() == 0){
            this.calculate()
        }
        this.setNum1(this.getResult())
        this.setNum2(0) 
        this.setResultTrigger(1)
    }

    calculate(){
        switch (this.getOperation()) {
            case 0:
                this.setResult(Number(this.getNum1()) + Number(this.getNum2()))
                break;
            case 1:
                this.setResult(Number(this.getNum1()) - Number(this.getNum2()))
                break;
            case 2:
                this.setResult(Number(this.getNum1()) * Number(this.getNum2()))
                break;
            case 3:
                 this.setResult(Number(this.getNum1()) / Number(this.getNum2()))
            default:
                break;
        }
        this.setResultTrigger(1)
        return this.getResult()
    }

    reset(){
        this.setNum1(0)
        this.setNum2(0)
        this.setResult(0)
        this.setEditing(0)
        this.setResultTrigger(0)
    }

}

const calculadora = new Calculator()
const visor = document.querySelector("#visor")

function addNumber(number){
    if(calculadora.getEditing() == 0){
        calculadora.setNum1(`${calculadora.getNum1()}${number}`)
    }else{
        calculadora.setNum2(`${calculadora.getNum2()}${number}`)
    }

    visor.value = `${visor.value}${number}`

}

function somar(){
    limparVisor()
    if(calculadora.getEditing() == 0){
        calculadora.switchEditing()
        calculadora.setOperation(0)
    }else{   
        calculadora.setOperation(0)
        calculadora.newOperation()
    }
}
function subtrair(){
    limparVisor()
    if(calculadora.getEditing() == 0){
        calculadora.switchEditing()
        calculadora.setOperation(1)
    }else{
        calculadora.setOperation(1)
        calculadora.newOperation()
    }
}
function multiplicar(){
    limparVisor()
    if(calculadora.getEditing() == 0){
        calculadora.switchEditing()
        calculadora.setOperation(2)
    }else{
        calculadora.setOperation(2)
        calculadora.newOperation()
    }
}
function dividir(){
    limparVisor()
    if(calculadora.getEditing() == 0){
        calculadora.switchEditing()
        calculadora.setOperation(3)
    }else{
        calculadora.setOperation(3)
        calculadora.newOperation()
    }
}

function resultado(){
    limparVisor()
    calculadora.calculate()
    visor.value = calculadora.getResult()
}

function limparVisor(){
    visor.value = ''
}

function limparPainel(){
    limparVisor()
    calculadora.reset()
}