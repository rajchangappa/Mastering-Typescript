class Person {
  public name: string;
  protected age: number;
  private email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Methods
  public introduce(): string {
    return `Hi! My name is ${this.name}. I am ${this.age} years old.`;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

const user1 = new Person("Rudeas Greyrat", 21, "greyratrudy@g.com");
console.log(user1.getName());
console.log(user1.introduce());
user1.setName("Paul Greyrat");
console.log(user1.getName());

// Inheritance lets one class reuse and build upon another class. The child class uses extends to inherit the parent’s properties and methods. It can add new functionality or override existing methods.

class Employee {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}

  fetchDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let gintoki = new Employee(1, "Sakata Gintoki", "Engineer");

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private team: number,
  ) {
    super(id, name, department);
  }

  getTeamInfo(): string {
    return `${this.name} manages ${this.team} people`;
  }
}
