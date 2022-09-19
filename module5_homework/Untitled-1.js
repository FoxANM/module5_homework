let inputValue = prompt("Введите число");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Чётное");
    } else {
        console.log("Нечётное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}
