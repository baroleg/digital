// 1. Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму элементов массива, расположенных до
// минимального элемента.
function sumBeforeMin(arr) {
    // Проверка на пустой массив
    if (arr.length === 0) {
        console.log("Массив пуст");
        return 0;
    }

    // Находим индекс минимального элемента
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    console.log(`Минимальный элемент: ${arr[minIndex]} на позиции ${minIndex}`);

    // Суммируем элементы до минимального
    let sum = 0;
    for (let i = 0; i < minIndex; i++) {
        sum += arr[i];
    }

    return sum;
}

// 2. Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму модулей элементов массива,
// расположенных после первого элемента равного нулю.
function sumAbsAfterFirstZero(arr) {
    // Находим индекс первого нуля
    let zeroIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroIndex = i;
            break;
        }
    }

    // Если нуля нет, возвращаем 0
    if (zeroIndex === -1) {
        console.log("В массиве нет нулевых элементов");
        return 0;
    }

    console.log(`Первый ноль на позиции ${zeroIndex}`);

    // Суммируем модули элементов после нуля
    let sum = 0;
    for (let i = zeroIndex + 1; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }

    return sum;
}

// 3. Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую сумму элементов, расположенных после
// последнего элемента равного нулю.
function sumAfterLastZero(arr) {
    // Находим индекс последнего нуля
    let zeroIndex = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            zeroIndex = i;
            break;
        }
    }

    // Если нуля нет, возвращаем 0
    if (zeroIndex === -1) {
        console.log("В массиве нет нулевых элементов");
        return 0;
    }

    console.log(`Последний ноль на позиции ${zeroIndex}`);

    // Суммируем элементы после последнего нуля
    let sum = 0;
    for (let i = zeroIndex + 1; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// 4. Напишите функцию, принимающую на вход массив вещественных
// чисел и возвращающую произведение элементов, расположенных
// между максимальным и минимальным элементами.
function productBetweenMaxAndMin(arr) {
    if (arr.length < 2) {
        console.log("Массив слишком маленький");
        return 0;
    }

    // Находим индексы максимального и минимального элементов
    let maxIndex = 0;
    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    console.log(`Максимум: ${arr[maxIndex]} на позиции ${maxIndex}`);
    console.log(`Минимум: ${arr[minIndex]} на позиции ${minIndex}`);

    // Определяем границы интервала
    let start = Math.min(maxIndex, minIndex) + 1;
    let end = Math.max(maxIndex, minIndex);

    // Если между ними нет элементов
    if (start >= end) {
        console.log("Между максимумом и минимумом нет элементов");
        return 0;
    }

    // Вычисляем произведение
    let product = 1;
    for (let i = start; i < end; i++) {
        product *= arr[i];
    }

    return product;
}

// 5. Напишите функцию, принимающую на вход массив вещественных чисел и возвращающую количество элементов, равных предыдущему элементу.
function countEqualPrevious(arr) {
    if (arr.length < 2) {
        return 0;
    }

    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        }
    }

    return count;
}

// 6. Напишите функцию, принимающую на вход массив вещественных чисел и возвращающую среднее арифметическое нечётных элементов.
function averageOddElements(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        // Проверяем, является ли элемент нечётным целым числом
        if (Number.isInteger(arr[i]) && arr[i] % 2 !== 0) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        console.log("Нечётных элементов нет");
        return 0;
    }

    return sum / count;
}

// 7. Напишите функцию, принимающую на вход массив вещественных чисел и возвращающую количество элементов, неравных своему предыдущему.
function countNotEqualPrevious(arr) {
    if (arr.length < 2) {
        return 0;
    }

    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            count++;
        }
    }

    return count;
}

// 1. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую номера строк и столбцов
// всех седловых точек матрицы.
// Матрица A имеет седловую точку Ai,j, если Ai,j является минимальным
// элементом в i-й строке и максимальным элементом в j-м столбце.
//  [
//     [3, 5, 1], - 1
//     [2, 4, 7], - 2
//     [8, 6, 9]  - 6
//  ] => 6
function findSaddlePoints(matrix) {
    // Проверка на пустую матрицу
    if (matrix.length === 0 || matrix[0].length === 0) {
        console.log("Матрица пуста");
        return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    let saddlePoints = [];

    // Для каждого элемента матрицы
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let current = matrix[i][j]; // Элемент матрицы Ai,j
            let isMinInRow = true;
            let isMaxInCol = true;

            // Проверяем, является ли элемент минимальным в строке
            for (let k = 0; k < cols; k++) {
                if (matrix[i][k] < current) {
                    isMinInRow = false;
                    break;
                }
            }

            // Если это минимум в строке, проверяем максимум в столбце
            if (isMinInRow) {
                for (let k = 0; k < rows; k++) {
                    if (matrix[k][j] > current) {
                        isMaxInCol = false;
                        break;
                    }
                }

                // Если это и минимум в строке, и максимум в столбце
                if (isMaxInCol) {
                    saddlePoints.push({
                        row: i,
                        col: j,
                        value: current
                    });
                }
            }
        }
    }

    return saddlePoints;
}

// 2. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую минимум среди сумм
// элементов диагоналей, параллельных главной диагонали матрицы.
//  [
//     [3, 5, 1],
//     [2, 4, 7],
//     [8, 6, 9]
//  ] => [12, 1, 16, 8, 8] => 1
function minSumParallelDiagonals(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        console.log("Матрица пуста");
        return null;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    let sums = [];

    // Суммируем все диагонали, параллельные главной
    // Диагонали выше главной
    for (let startCol = 1; startCol < cols; startCol++) {
        let sum = 0;
        let i = 0;
        let j = startCol;

        while (i < rows && j < cols) {
            sum += matrix[i][j];
            i++;
            j++;
        }
        sums.push(sum);
    }

    // Главная диагональ
    let mainDiagonalSum = 0;
    for (let i = 0; i < Math.min(rows, cols); i++) {
        mainDiagonalSum += matrix[i][i];
    }
    sums.push(mainDiagonalSum);

    // Диагонали ниже главной
    for (let startRow = 1; startRow < rows; startRow++) {
        let sum = 0;
        let i = startRow;
        let j = 0;

        while (i < rows && j < cols) {
            sum += matrix[i][j];
            i++;
            j++;
        }
        sums.push(sum);
    }

    // Находим минимум
    let minSum = sums[0];
    for (let i = 1; i < sums.length; i++) {
        if (sums[i] < minSum) {
            minSum = sums[i];
        }
    }

    return minSum;
}

// 3. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую сумму элементов в тех
// строках, которые содержат хотя бы один отрицательный элемент.
// [
//     [1, -2, 3],
//     [-4, 5, -6],
//     [7, 8, 9]
// ] => 2
function sumRowsWithNegative(matrix) {
    if (matrix.length === 0) {
        console.log("Матрица пуста");
        return [];
    }

    let results = [];

    for (let i = 0; i < matrix.length; i++) {
        let hasNegative = false;
        let rowSum = 0;

        // Проверяем наличие отрицательных элементов и суммируем
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
            if (matrix[i][j] < 0) {
                hasNegative = true;
            }
        }

        // Если есть отрицательный элемент, добавляем сумму
        if (hasNegative) {
            results.push({
                row: i,
                sum: rowSum
            });
        }
    }

    return results;
}

// 4. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую одномерный массив,
// состоящий из минимальных четных элементов строк матрицы.
// [
//     [3, 5, 1],
//     [2, 4, 7],
//     [8, 6, 9]
// ] => [null,2,6]
function minEvenInRows(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let minEven = null;

        // Ищем минимальный четный элемент в строке
        for (let j = 0; j < matrix[i].length; j++) {
            if (Number.isInteger(matrix[i][j]) && matrix[i][j] % 2 === 0) {
                if (minEven === null || matrix[i][j] < minEven) {
                    minEven = matrix[i][j];
                }
            }
        }

        result.push(minEven);
    }

    return result;
}

// 5. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую одномерный массив,
// состоящий из сумм отрицательных элементов соответствующих
// столбцов матрицы.
// [
//     [1, -2, 3],
//     [-4, 5, -6],
//     [7, -8, 9]
// ] => [-4, -10, -6]
function sumNegativeInColumns(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const cols = matrix[0].length;
    let columnSums = new Array(cols).fill(0); // [0, 0, 0]

    // Для каждого столбца суммируем отрицательные элементы
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] < 0) {
                columnSums[j] += matrix[i][j];
            }
        }
    }

    return columnSums;
}

// 6. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую одномерный массив,
// элементами которого будут номера последних отрицательных
// элементов строк матрицы.
// [
//     [1, -2, 3],
//     [-4, 5, -6],
//     [7, 8, 9]
// ] => [1, 2, -1]
function lastNegativeIndices(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let lastNegativeIndex = -1;

        // Ищем последний отрицательный элемент в строке
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < 0) {
                lastNegativeIndex = j;
            }
        }

        result.push(lastNegativeIndex);
    }

    return result;
}

// 7. Напишите функцию, принимающую на вход вещественную
// прямоугольную матрицу и возвращающую одномерный массив,
// состоящий из минимальных элементов соответствующих столбцов
// матрицы.
//  [
//     [3, 5, 1],
//     [2, 4, 7],
//     [8, 6, 9]
// ] => [2, 4, 1]
function minInColumns(matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const cols = matrix[0].length;
    let columnMins = new Array(cols).fill(Infinity);

    // Находим минимум в каждом столбце
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] < columnMins[j]) {
                columnMins[j] = matrix[i][j];
            }
        }
    }

    return columnMins;
}

console.log("------------------------\n");

// Тестовые массивы
const array1 = [5, 3, 8, 1, 9, 2, 7];   // Минимум = 1 (позиция 3)
const array2 = [4, 0, -2, 5, 0, 3, -1]; // Есть нули
const array3 = [2, 2, 3, 3, 3, 4, 4];   // Повторяющиеся элементы
const array4 = [1, 3, 5, 7, 9];         // Только нечётные
const array5 = [];                      // Пустой массив

console.log("Тестовые массивы:");
console.log("array1 =", array1);
console.log("array2 =", array2);
console.log("array3 =", array3);
console.log("array4 =", array4);
console.log("array5 =", array5);
console.log();

// Тестируем все функции для одномерных массивов
console.log("Вариант 1: Сумма элементов до минимального");
console.log("array1:", sumBeforeMin(array1));
console.log("array2:", sumBeforeMin(array2));
console.log("array5:", sumBeforeMin(array5));
console.log();

console.log("Вариант 2: Сумма модулей после первого нуля");
console.log("array2:", sumAbsAfterFirstZero(array2));
console.log("array1:", sumAbsAfterFirstZero(array1));
console.log();

console.log("Вариант 3: Сумма элементов после последнего нуля");
console.log("array2:", sumAfterLastZero(array2));
console.log("array1:", sumAfterLastZero(array1));
console.log();

console.log("Вариант 4: Произведение между максимумом и минимумом");
console.log("array1:", productBetweenMaxAndMin(array1));
console.log("array2:", productBetweenMaxAndMin(array2));
console.log();

console.log("Вариант 5: Количество элементов, равных предыдущему");
console.log("array3:", countEqualPrevious(array3));
console.log("array1:", countEqualPrevious(array1));
console.log();

console.log("Вариант 6: Среднее арифметическое нечётных элементов");
console.log("array4:", averageOddElements(array4));
console.log("array1:", averageOddElements(array1));
console.log();

console.log("Вариант 7: Количество элементов, неравных предыдущему");
console.log("array3:", countNotEqualPrevious(array3));
console.log("array1:", countNotEqualPrevious(array1));
console.log();

console.log("------------------------\n");

const matrix1 = [
    [3, 5, 1],
    [2, 4, 7],
    [8, 6, 9]
];
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrix3 = [
    [1, -2, 3],
    [-4, 5, -6],
    [7, 8, 9]
];

console.log("Тестовые матрицы:");
console.log("matrix1 =");
printMatrix(matrix1);
console.log("\nmatrix2 =");
printMatrix(matrix2);
console.log("\nmatrix3 =");
printMatrix(matrix3);
console.log();

// Вспомогательная функция для печати матрицы
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let str = "";
        for (let j = 0; j < matrix[i].length; j++) {
            str = str + matrix[i][j] + (j == matrix[i].length - 1 ? "" : ", ")
        }
        console.log(str);
    }
}

console.log("Вариант 1: Поиск седловых точек");
let saddlePoints = findSaddlePoints(matrix1);
console.log("Матрица 1:", saddlePoints.length > 0 ? saddlePoints : "нет седловых точек");
saddlePoints = findSaddlePoints(matrix2);
console.log("Матрица 2:", saddlePoints.length > 0 ? saddlePoints : "нет седловых точек");
console.log();

console.log("Вариант 2: Минимум среди сумм диагоналей");
console.log("Матрица 1:", minSumParallelDiagonals(matrix1));
console.log("Матрица 2:", minSumParallelDiagonals(matrix2));
console.log();

console.log("Вариант 3: Суммы строк с отрицательными элементами");
let rowSums = sumRowsWithNegative(matrix3);
rowSums.forEach(item => {
    console.log(`Строка ${item.row}: сумма = ${item.sum}`);
});
console.log("Матрица 1:", sumRowsWithNegative(matrix1));
console.log();

console.log("Вариант 4: Минимальные четные элементы строк");
console.log("Матрица 1:", minEvenInRows(matrix1));
console.log("Матрица 2:", minEvenInRows(matrix2));
console.log();

console.log("Вариант 5: Суммы отрицательных элементов столбцов");
console.log("Матрица 3:", sumNegativeInColumns(matrix3));
console.log("Матрица 1:", sumNegativeInColumns(matrix1));
console.log();

console.log("Вариант 6: Номера последних отрицательных элементов строк");
console.log("Матрица 3:", lastNegativeIndices(matrix3));
console.log("Матрица 1:", lastNegativeIndices(matrix1));
console.log();

console.log("Вариант 7: Минимальные элементы столбцов");
console.log("Матрица 1:", minInColumns(matrix1));
console.log("Матрица 2:", minInColumns(matrix2));
console.log();