var Teacher = require("./teacher")
var Student = require("./student")

class Lesson {
    constructor(teacher, students) {
        this.teacher = teacher;

        // mark all students are absent
        this.teacher.subject.setAbsentStudents(students);
    }

    markOnTime(ontimeStudents) {
        this.teacher.subject.setOnTimeStudents(ontimeStudents);

    }

    markLate(lateStudents) {
        this.teacher.subject.setLateStudents(lateStudents);

    }

    outputSummary() {
        console.log(`The ${this.teacher.subject.subjectName} lesson is conducted by ${this.teacher.name}`)
        console.log("----------------")
        console.log("|  ATTENDANCE  | ")
        console.log("----------------")
        this.teacher.subject.getOnTimeStudents().forEach((student) => {
            console.log(`${student.name} is on time`)
        });
        this.teacher.subject.getLateStudents().forEach((student) => {
            console.log(`${student.name} is Late`)
        });
        this.teacher.subject.getAbsentStudents().forEach((student) => {
            console.log(`${student.name} is Absent `)
        })

    }

}
module.exports = Lesson;