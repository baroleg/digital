const studentEntity = {
    "lastname": "Ivanov",
    "name": "Sergey",
    "marks": [
        {
            "subject": "Math",
            "mark": 5
        },
        {
            "subject": "Math",
            "mark": 4
        },
        {
            "subject": "Math",
            "mark": 3
        },
        {
            "subject": "Math",
            "mark": 4
        },
        {
            "subject": "physics",
            "mark": 5
        }
    ]
}

function printStudentInfo(student) {
    console.log(`Student: ${student.lastname} ${student.name}`)
    student.marks.forEach((element, ind) => {
        console.log(`   ${ind + 1}: ${element.subject} - ${element.mark}`)
    });
}

console.log("Проверка задания 1")
console.log(printStudentInfo(studentEntity));

class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

class Student {
    constructor(lastname, name, marks) {
        this.lastname = lastname;
        this.name = name; 
        this.marks = marks;
    }

    getAverageMark = function() {
        if (this.marks.length === 0) {
            return 0;
        }

        const sum = this.marks.reduce((total, markObj) => total + markObj.mark, 0)
        return sum / this.marks.length;
    }
}

const studentClassEntity = new Student("Petrov", "Ivan", [])
studentClassEntity.marks.push(new Mark("phisics", 5))
studentClassEntity.marks.push(new Mark("phisics", 4))
studentClassEntity.marks.push(new Mark("phisics", 5))
studentClassEntity.marks.push(new Mark("English", 3))
studentClassEntity.marks.push(new Mark("English", 4))

console.log("Проверка задания 3")
console.log(studentClassEntity.getAverageMark());

Student.prototype.getMarksBySubject = function(subject) {
    return this.marks.filter(markObj => markObj.subject === subject);
}

console.log("Проверка задания 4")
console.log(studentClassEntity.getMarksBySubject("phisics"));

Student.prototype.addMark = function(subject, mark) {
    this.marks.push(new Mark(subject, mark))
}

console.log("Проверка задания 5")
studentClassEntity.addMark("phisics", 2);
console.log(studentClassEntity.getMarksBySubject("phisics"));

Student.prototype.deleteMarksBySubject = function(subject) {
    this.marks = this.marks.filter(elem => elem.subject !== subject)
}

console.log("Проверка задания 6")
studentClassEntity.deleteMarksBySubject("phisics");
console.log(printStudentInfo(studentClassEntity));