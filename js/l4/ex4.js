class Figure {
    // Приватные свойства (объявляются с #)
    #x;
    #y;
    
    // Конструктор базового класса
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    
    // Геттеры для доступа к приватным свойствам
    get x() {
        return this.#x;
    }
    
    get y() {
        return this.#y;
    }
    
    // Сеттеры для изменения приватных свойств
    set x(x) {
        this.#x = x;
    }
    
    set y(y) {
        this.#y = y;
    }
    
    // Метод для расчёта площади (возвращает undefined)
    square() {
        return undefined;
    }
}

// Наследованный класс
class Circle extends Figure {
    // Приватное свойство для радиуса
    #r;
    
    // Конструктор класса Circle
    constructor(x, y, r) {
        // Вызов конструктора родительского класса
        super(x, y);
        this.#r = r;
    }
    
    // Геттер для радиуса
    get r() {
        return this.#r;
    }
    
    // Сеттер для радиуса
    set r(val) {
        this.#r = val;
    }
    
    // Переопределение метода square для расчёта площади круга
    square() {
        // Площадь круга: π * r²
        return Math.PI * this.#r * this.#r;
    }
    
    // Дополнительный метод для вывода информации о круге
    getInfo() {
        return `Круг: центр (${this.x}, ${this.y}), радиус = ${this.r}`;
    }
}

// Наследованный класс
class Rectangle extends Figure {
    // Приватные свойства для высоты и ширины
    #h;
    #w;
    
    // Конструктор класса Rectangle
    constructor(x, y, h, w) {
        // Вызов конструктора родительского класса
        super(x, y);
        this.#h = h;
        this.#w = w;
    }
    
    // Геттеры для высоты и ширины
    get h() {
        return this.#h;
    }
    
    get w() {
        return this.#w;
    }
    
    // Сеттеры для высоты и ширины
    set h(h) {
        this.#h = h;
    }
    
    set w(w) {
        this.#w = w;
    }
    
    // Переопределение метода square для расчёта площади прямоугольника
    square() {
        // Площадь прямоугольника: высота * ширина
        return this.#h * this.#w;
    }
    
    // Дополнительный метод для вывода информации о прямоугольнике
    getInfo() {
        return `Прямоугольник: центр (${this.x}, ${this.y}), высота = ${this.h}, ширина = ${this.w}`;
    }
}

// Демонстрация работы с экземплярами классов
console.log("=== Демонстрация работы с классами ===\n");

// Создаем экземпляр круга
console.log("1. Создание круга:");
const circle = new Circle(5, 5, 10);
console.log(circle.getInfo());
console.log(`Площадь круга: ${circle.square().toFixed(2)}`);
console.log("---");

// Создаем экземпляр прямоугольника
console.log("\n2. Создание прямоугольника:");
const rectangle = new Rectangle(0, 0, 4, 6);
console.log(rectangle.getInfo());
console.log(`Площадь прямоугольника: ${rectangle.square()}`);
console.log("---");

// Демонстрация работы методов базового класса
console.log("\n3. Демонстрация работы с методами базового класса:");
console.log("Круг - координата X:", circle.x);
console.log("Круг - координата Y:", circle.y);

// Изменяем координаты круга
circle.x = 10;
circle.y = 15;
console.log("После изменения координат круга:");
console.log(circle.getInfo());
console.log("---");