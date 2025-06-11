class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

 get name() {
    return this._name;
  }

 set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

const student = new Student("Alice", 20);
student.study(); 
student.age = 21; 

const teacher = new Teacher("Mr. Smith", 40);
teacher.teach(); 
