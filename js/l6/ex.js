//  1. Реализуйте функцию для поиска в двух заданных массивах элементов,
// которые присутствуют в обоих массивах. Используйте Set.

function findCommonElements(arr1, arr2) {
    // Создаем Set из первого массива для быстрого поиска
    const set1 = new Set(arr1);
    
    // Создаем Set для хранения результата (чтобы избежать дубликатов)
    const commonSet = new Set();
    
    // Проходим по второму массиву и проверяем, есть ли элемент в set1
    for (const element of arr2) {
        if (set1.has(element)) {
            commonSet.add(element);
        }
    }
    
    // Преобразуем Set обратно в массив
    return Array.from(commonSet);
}

/**
 * Альтернативная вариант с использованием filter
 */
function findCommonElementsAlt(arr1, arr2) {
    const set1 = new Set(arr1);
    // Используем filter и Set для уникальности
    return [...new Set(arr2.filter(element => set1.has(element)))];
}

// 2. Реализуйте функцию, которая подсчитывает количество вхождений
// каждого элемента в массиве. Используйте Map.
function countOccurrences(arr) {
    const occurrencesMap = new Map();
    
    for (const element of arr) {
        if (occurrencesMap.has(element)) {
            // Если элемент уже есть, увеличиваем счетчик на 1
            const currentCount = occurrencesMap.get(element);
            occurrencesMap.set(element, currentCount + 1);
        } else {
            // Если элемент встречается впервые, устанавливаем счетчик = 1
            occurrencesMap.set(element, 1);
        }
    }
    
    return occurrencesMap;
}

// 3. В массиве студентов подсчитать число обучающихся в самой большой
// группе. Номер группы – свойство класса Student типа string.

class Student {
    // Приватные поля
    #name;
    #group;
    
    constructor(name, group) {
        this.#name = name;
        this.#group = group;
    }
    
    // Геттеры
    get name() {
        return this.#name;
    }
    
    get group() {
        return this.#group;
    }
    
    // Метод для получения информации о студенте
    getInfo() {
        return `Студент: ${this.#name}, Группа: ${this.#group}`;
    }
}

function countLargestGroup(students) {
    // Используем Map для подсчета студентов в каждой группе
    const groupCount = new Map();
    
    // Подсчитываем количество студентов в каждой группе
    for (const student of students) {
        const group = student.group;
        
        if (groupCount.has(group)) {
            groupCount.set(group, groupCount.get(group) + 1);
        } else {
            groupCount.set(group, 1);
        }
    }
    
    // Находим максимальное количество студентов в одной группе
    let maxCount = 0;
    let largestGroup = null;
    
    // Используем for...of для итерации по Map
    for (const [group, count] of groupCount) {
        if (count > maxCount) {
            maxCount = count;
            largestGroup = group;
        }
    }
    
    // Возвращаем результат
    return {
        group: largestGroup,
        count: maxCount
    };
}


console.log("=== ЗАДАНИЕ 1 ===\n");
const arrayA = [1, 2, 3, 4, 5, 3, 2, 1, 6];
const arrayB = [4, 5, 6, 7, 8, 4, 5, 9];
const arrayC = ["apple", "banana", "orange", "apple", "grape"];
const arrayD = ["banana", "grape", "kiwi", "melon"];

console.log("Массив A:", arrayA);
console.log("Массив B:", arrayB);
console.log("Общие элементы:", findCommonElements(arrayA, arrayB));
console.log("Общие элементы (альт.):", findCommonElementsAlt(arrayA, arrayB));
console.log();

console.log("Массив C:", arrayC);
console.log("Массив D:", arrayD);
console.log("Общие элементы:", findCommonElements(arrayC, arrayD));
console.log("Общие элементы (альт.):", findCommonElements(arrayC, arrayD));
console.log();

// Демонстрация с пустыми массивами
console.log("Пустые массивы:", findCommonElements([], [1, 2, 3]));
console.log();

console.log("=== ЗАДАНИЕ 2 ===\n");

const testArray1 = [1, 2, 3, 2, 1, 4, 5, 4, 4, 6, 1];
const testArray2 = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];
const testArray3 = [true, false, true, true, false, true];

console.log("Исходный массив:", testArray1);
const occurrences1 = countOccurrences(testArray1);
console.log("Подсчет вхождений:");
for (const [element, count] of occurrences1) {
    console.log(`  ${element}: ${count} раз(а)`);
}
console.log();

console.log("Массив строк:", testArray2);
const occurrences2 = countOccurrences(testArray2);
for (const [element, count] of occurrences2) {
    console.log(`  "${element}": ${count} раз(а)`);
}
console.log();

console.log("Массив булевых значений:", testArray3);
const occurrences3 = countOccurrences(testArray3);
for (const [element, count] of occurrences3) {
    console.log(`  ${element}: ${count} раз(а)`);
}
console.log();

console.log("=== ЗАДАНИЕ 3 ===\n");

// Создаем массив студентов
const students = [
    new Student("Иванов Иван", "ИТ-21"),
    new Student("Петров Петр", "ИТ-21"),
    new Student("Сидорова Анна", "ИТ-21"),
    new Student("Козлов Дмитрий", "ИТ-22"),
    new Student("Морозова Елена", "ИТ-22"),
    new Student("Волков Андрей", "ИТ-23"),
    new Student("Лисицына Мария", "ИТ-23"),
    new Student("Медведев Алексей", "ИТ-23"),
    new Student("Соколова Ольга", "ИТ-24"),
    new Student("Орлов Игорь", "ИТ-21") 
];


// Подсчет количества студентов в самой большой группе
const largestGroupInfo = countLargestGroup(students);
console.log("Самая большая группа:");
console.log(`  Группа: ${largestGroupInfo.group}`);
console.log(`  Количество студентов: ${largestGroupInfo.count}`);