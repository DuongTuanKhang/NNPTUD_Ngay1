// STUDENT OBJECT TEMPLATE
function createStudent(name, family, age, scores, birth) {
  return {
    name,
    family,
    age,
    scores,
    birth,

    getFullName: function () {
      return this.family + " " + this.name;
    },

    getBirthDay: function () {
      return `${this.birth.day}/${this.birth.month}/${this.birth.year}`;
    },

    getAVGScore: function () {
      return (
        this.scores.reduce(function (sum, e) {
          return sum + e;
        }, 0) / this.scores.length
      );
    },
  };
}

// OBJECT 1
let student1 = createStudent("Tung", "Nguyen", 18, [9, 10, 8], {
  year: 2008,
  month: 11,
  day: 1,
});

// OBJECT 2
let student2 = createStudent("Lan", "Tran", 20, [8, 7, 9], {
  year: 2006,
  month: 5,
  day: 12,
});

//  OBJECT 3
let student3 = createStudent("Minh", "Le", 19, [6, 8, 7], {
  year: 2007,
  month: 9,
  day: 23,
});

// JSON DATA
let jsonStudent1 = `{
    "name": "Tung",
    "family": "Nguyen",
    "age": 18,
    "scores": [9,10,8],
    "birth": { "year": 2008, "month": 11, "day": 1 }
}`;

let jsonStudent2 = `{
    "name": "Lan",
    "family": "Tran",
    "age": 20,
    "scores": [8,7,9],
    "birth": { "year": 2006, "month": 5, "day": 12 }
}`;

let jsonStudent3 = `{
    "name": "Minh",
    "family": "Le",
    "age": 19,
    "scores": [6,8,7],
    "birth": { "year": 2007, "month": 9, "day": 23 }
}`;

// OUTPUT
const output = document.getElementById("output");

function printStudent(student, index) {
  output.textContent += `STUDENT ${index}\n`;
  output.textContent += `Họ tên: ${student.getFullName()}\n`;
  output.textContent += `Ngày sinh: ${student.getBirthDay()}\n`;
  output.textContent += `Điểm TB: ${student.getAVGScore().toFixed(2)}\n`;
  output.textContent += `---------------------------\n`;
}

printStudent(student1, 1);
printStudent(student2, 2);
printStudent(student3, 3);

// PARSE JSON
console.log(JSON.parse(jsonStudent1));
console.log(JSON.parse(jsonStudent2));
console.log(JSON.parse(jsonStudent3));
