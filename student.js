var Person = require("./person");

class Student extends Person {
    constructor(studentName) {
        if (studentName !== null && studentName !== "") {
            super(studentName, "Student")

        } else {
            throw new ReferenceError("Invalid Arguments")
        }

    }

}
module.exports = Student;