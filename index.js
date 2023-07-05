const button = document.getElementById("button");
const birthday = document.getElementById("input");
const result = document.querySelector('.result');
const mistake = document.querySelector('.mistake');

let now = new Date();
console.log(now);

function calculateDays() {
  const birthdayDate = birthday.value;                         //получаем значение даты из элемента HTML
  if (isNaN(birthdayDate) !== true) {
    mistake.textContent = 'Пожалуйста введите дату рождения';
  } else {
    const birthdayTimestamp = Date.parse(birthdayDate);       //преобразуем дату в таймстамп
    const nowTimestamp = Date.now();                         //получаем текущий таймстамп
    let diff = birthdayTimestamp - nowTimestamp;            //получаем разницу в милисекундах
    let resultDay = Math.floor(diff / 86400000);           //преобразуем количество милисекунд в дни (86400000 - количество миллисекунд в 1 дне) 
    result.textContent = resultDay;                       //выводим результат на экран
  }
  input.value = "";
}

function cleanMe() {
  mistake.textContent = "";
  result.textContent = '';
}

button.addEventListener('click', calculateDays);
document.getElementById("input").addEventListener('click', cleanMe);
