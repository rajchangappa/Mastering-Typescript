// Interface are used to define the structure of an object. They can be used to define the shape of an object, including its properties and methods. Interfaces can also be used to define the types of function parameters and return values.

interface User {
  readonly id: number;
  name: string;
  age: number;
  email?: string;
}

let user: User = {
  id: 1,
  name: "Uzumaki Naruto",
  age: 21,
};

// user.id = 2;

interface Product {
  name: string;
  price: number;
  getDiscount(discount: number): number;
}

let product: Product = {
  name: "Mackbook Neo",
  price: 89000,
  getDiscount(percent: number): number {
    return this.price * (percent / 100);
  },
};

// A type alias gives a name to a type so you can reuse it. It can describe objects, but also strings, numbers, functions, unions, tuples, and more. Think of it as giving a reusable name to a type definition.

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 2 };

type ID = string | number;

let userID: ID = 232323;
let productID: ID = "product!1";

// Difference between interface and type alias: Both can describe objects. Use interface for object structures you expect to extend or build upon. Use type when you need combinations like unions (A | B), tuples, or other complex types. When either works, interface is a good default for objects.

// Interfaces can be extended, type aliases cannot.
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let dog: Dog = { name: "Snoopy", breed: "Labrador" };

// Interfaces can be declared multiple times and they can merge together.
interface Tiger {
  name: string;
}

interface Tiger {
  type: string;
}

let tiger: Tiger = { name: "Sherkhan", type: "Bengal Tiger" };

// Union Types (OR)
type Status = "pending" | "approved" | "rejected";

function getStatus(status: Status): void {
  console.log(`Status is ${status}`);
}
getStatus("pending");
getStatus("approved");

// Intersection Types (AND)
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type CircleType = Circle | Colorful;

let circle: CircleType = { color: "Red", radius: 33 };
