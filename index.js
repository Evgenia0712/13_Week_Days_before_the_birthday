const button = document.getElementById("button");
const birthday = document.getElementById("input");
const result = document.querySelector('.result');
const mistake = document.querySelector('.mistake');

let now = new Date();
console.log(now);

function calculateDays() {
  //получаем значение даты из элемента HTML
  const birthdayDate = birthday.value;
  if (birthday.value = '') {
    mistake.textContent = 'Пожалуйста введите дату рождения';
  } else {


    //преобразуем дату в таймстамп
    const birthdayTimestamp = Date.parse(birthdayDate);
    //получаем текущий таймстамп
    const nowTimestamp = Date.now();
    //получаем разницу в милисекундах
    let diff = birthdayTimestamp - nowTimestamp;
    //преобразуем количество милисекунд в дни
    let resultDay = Math.floor(diff / 86400000); //86400000 - количество миллисекунд в 1 дне
    //выводим результат на экран 
    result.textContent = resultDay;
  }
  input.value = "";
}

function cleanMe() {
  mistake.textContent = "";
}

button.addEventListener('click', calculateDays);
document.getElementById("input").addEventListener('click', cleanMe);

