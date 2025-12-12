// Напишите исходный код программы, которая находит все числа
// Армстронга на заданном пользователем отрезке [a, b].
// Числа Армстронга – это натуральные числа, равные сумме своих цифр,
// возведённых в степень количества цифр в их записи.
// Пример: 153 = 13
// + 53
// + 33

const a = parseInt(prompt("Введите 1 число"));
const b = parseInt(prompt("Введите 2 число"));

let found = false;
for (let i = a; i < b; i++) {
  const iStr = i.toString();
  const digits = iStr.length;
  let sum = 0;
  for (let j = 0; j < iStr; j++) {
    sum = sum + Math.pow(parseInt(iStr[j]), digits);
  }

  if (i === sum) {
    console.log("Число Армстрога " + i);
    found = true;
  }
}

if (!found) {
  console.log("Интервал не имеет числ Армстронга");
}
