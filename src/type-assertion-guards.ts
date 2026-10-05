// A type assertion tells TypeScript: “I know this value's type better than you do.
let value: unknown = "We are learning TypeScript";
let strLength: number = (value as string).length;
// let strLengthB: number = (<string>value).length;

// A type guard is a check that actually determines the type at runtime, allowing TypeScript to narrow the type safely.
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// instanceof checks whether an object was created from a particular class or constructor. TypeScript uses this check to narrow the type.
class Dog {
  bark() {
    console.log("Bark!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const animal1 = new Dog();
const animal2 = new Cat();
makeSound(animal1);
makeSound(animal2);
