class Person {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }
}

// Example usage:
const person1 = new Person("John Doe", 30, "Male", "john@example.com");
console.log("Name:", person1.getName());
console.log("Age:", person1.getAge());
console.log("Gender:", person1.getGender());
console.log("Email:", person1.getEmail());
