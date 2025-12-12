// 1. Напишите функцию, которая принимает три числовых параметра и
// возвращает произведение двух максимальных из них.

function execute1(a, b, c) {
    const numbers = [a, b, c];
    numbers.sort((x, y) => y - x);
    return numbers[0] * numbers[1];
}

console.log(execute1(10, 8, 7)); // 10 * 8 = 80
console.log(execute1(1, 2, 3)); // 3 * 2 = 6
console.log(execute1(10, 10, 10)); // 10 * 10 = 100
// 2. Объявите функцию, которая принимает на вход два параметра: имя и
// звание. Значение звания по умолчанию «рядовой».
// Продемонстрируйте вариант использования функции с передачей 1 и 2
// параметров.

function execute2(name, rank = 'рядовой') {
    return rank + " " + name;
}

console.log(execute2('Иван'));
console.log(execute2('Петр', 'Капитан'));

// 3. Объявите функцию, которая принимает на вход функциональное
// выражение и набор параметров для его вызова, а возвращает результат
// вызова переданного функционального выражения.

const fn = function(a, b) {
    return a / b;
}

function execute3(funExp, a, b = 2) {
    return funExp(a, b);
}

console.log(fn(10, 2)); // 5
console.log(execute3(fn, 10, 2)); // 5
console.log(execute3(fn, 10)); // 5
// 4. Объявите функцию, которая принимает на вход целые числа. Для
// чётных значений функция возвращает стрелочное выражение
// возведения числа в квадрат, а для нечётных – стрелочное выражение
// возведения в куб.

function execute4(a) {
    if (!Number.isInteger(a)){
        console.log('Число не целое');
        return;
    }

    if (a % 2 == 0) {
        return (x) => x * x;
    } else {
        return (x) => Math.pow(x, 3);
    }
}

console.log(execute4(13.2));  // Ошибка
console.log(execute4(2)); // (x) => x * x
console.log(execute4(3)); // (x) => Math.pow(x, 3)
console.log(execute4(2)(2)); // 4
console.log(execute4(3)(3)); // 9

// 5. Напишите рекурсивную функцию для расчёта факториала числа n.
// n! = 1 * 2 * .. * n;
// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6

// function execute5(n) {
//     if (n < 1) return;
//     if (n == 1) return 1;
//     return n * execute5(n-1);
// }

// console.log(execute5(-10));
// console.log(execute5(1));
// console.log(execute5(2));
// console.log(execute5(3));
// console.log(execute5(4));
