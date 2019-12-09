const Teacher = require(`./teacher`);
const Student = require(`./student`);
const Lesson = require(`./lesson`);


const student1 = new Student('Peter');
const student2 = new Student('Mary');
const student3 = new Student(`Jack`);
const student4 = new Student(`Jill`);
const student5 = new Student(`Lilly`);
const student6 = new Student(`Bob`)

let mathTeacher = new Teacher("Maths", "Sam");
let Mathlesson = new Lesson(mathTeacher, [student1, student2, student3, student4, student5, student6]);

Mathlesson.markOnTime([student1, student2, student3]);
Mathlesson.markLate([student5, student6]);
Mathlesson.outputSummary();