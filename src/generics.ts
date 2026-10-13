// Generics let you write reusable code that works with different types while preserving type safety. Without generics, you might write separate functions for strings and numbers. Generics let you write one reusable function without losing type information.

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity("Subscribe");
let output2 = identity<number>(100);

// Array example
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

let arr1 = getFirstElement([1, 2, 3]);
let arr2 = getFirstElement(["Ichigo", "Rukia", "Renji"]);

// Generic Interfaces
interface KeyValue<key, value> {
  key: key;
  value: value;
}

let stringNumberPair: KeyValue<string, number> = {
  key: "age",
  value: 12,
};

// Generic Classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Sakura");

// Generic constraints
interface Length {
  length: number;
}

function logLength<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("Hello");
// logLength(12)
