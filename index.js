function addToResult(value){
document.getElementById("result").value += value
}
function calculateResult(){
    let result = eval(document.getElementById("result").value)
    document.getElementById("result").value = result
}