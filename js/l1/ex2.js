// Напишите исходный код программы, которая выводит в консоль все
// автоморфные числа на заданном пользователем отрезке [a, b].
// Натуральное число называется автоморфным, если десятичная запись
// его квадрата оканчивается на десятичную запись этого числа.

const a = parseInt(prompt("Введите 1 число"));
const b = parseInt(prompt("Введите 2 число"));

let found = false;

for (let i = a; i < b; i++) {
  const square = i * i;
  const squareStr = square.toString();
  if (squareStr.endsWith(i.toString())) {
    console.log("Число автоморфное: " + i + " его квадрат: " + squareStr);
    found = true;
  }
}

if (!found) {
  console.log("Автоморфные числа не найдены");
}
