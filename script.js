let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');

document.getElementById('add').addEventListener('click', function () {
    result.value = parseInt(num1.value)+parseInt(num2.value)
})
document.getElementById('sub').addEventListener('click', function () {
    result.value = parseInt(num1.value)-parseInt(num2.value)
})
document.getElementById('mul').addEventListener('click', function () {
    result.value = parseInt(num1.value)*parseInt(num2.value)
})
document.getElementById('div').addEventListener('click', function () {
    result.value = parseInt(num1.value)/parseInt(num2.value)
})


const btn = document.getElementById('btn');
const pr = document.getElementById('pr');
btn.addEventListener('click', function () {

})