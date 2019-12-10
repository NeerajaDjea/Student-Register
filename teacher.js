var Person = require("./person");
var Subject = require("./subject");

class Teacher extends Person {
    constructor(subjectName, teacherName) {
        if (subjectName !== null && subjectName !== "" && teacherName !== null && teacherName !== "") {
            super(teacherName, "Teacher");
            this.subject = new Subject(subjectName);


        } else {
            throw new Error("Enter a valid subject and name")

        }
    }

}

module.exports = Teacher;