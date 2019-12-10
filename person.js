class Person {
    constructor(name, title) {
        if (name !== null && name !== "" && title !== null && title !== "") {
            this.name = name;
            this.title = title;
        } else {
            throw new Error("Enter a valid name and Title")

        }
    }
}
module.exports = Person;