//1. Найти кнопку +
let buttonPlus = document.querySelector('[data-action="plus"]');

//2. Отследить клик по кнопке
buttonPlus.addEventListener("click", function(){
    //console.log('Hey! Click!')
//3. По клику совершаем действие: увеличиваем счетчик на 1


//3.1 Находим счетчик
//3.1.2 Находим весь блок с текущим счетчиком
let counterWrapper = buttonPlus.closest('.counter-wrapper')
console.log(counterWrapper)
//3.1.3 Внутри всего блока находим тег отвечающий за счетчик
let counter = counterWrapper.querySelector('[data-counter]')
console.log(counter)
//3.2 Увеличиваем счетчик на 1
// let counterValue = counter.dataset.counter;
// counterValue = ++counterValue;
// counter.dataset.counter = counterValue;

// counter.innerText = counterValue

counter.innerText = ++counter.innerText

})
