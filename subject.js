class Subject {
    constructor(subjectName) {
        this.subjectName = subjectName;
        this.studentsOnTime = [];
        this.studentsIsLate = [];
        this.studentAbsentMap = new Map();
    }

    getOnTimeStudents() {
        return this.studentsOnTime;
    }

    setOnTimeStudents(onTimeStudents) {
        onTimeStudents.forEach((student) => {
            var key = student.name;
            if (this.studentAbsentMap.get(key)) {
                this.studentAbsentMap.delete(key);
                this.studentsOnTime.push(student);
            }
        });
    }

    getLateStudents() {
        return this.studentsIsLate;
    }

    setLateStudents(lateStudents) {
        lateStudents.forEach((student) => {
            var key = student.name;
            if (this.studentAbsentMap.get(key)) {
                this.studentAbsentMap.delete(key);
                this.studentsIsLate.push(student);
            }
        });
    }

    getAbsentStudents() {
        return Array.from(this.studentAbsentMap.values());
    }

    setAbsentStudents(absentStudents) {
        absentStudents.forEach((student) => {
            this.studentAbsentMap.set(student.name, student);
        });
    }
}

module.exports = Subject;