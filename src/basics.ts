// Primitives
let username: string = "Raj";
let age: number = 30;
let isLoggedIn: boolean = true;

// Arrays: In TypeScript, you can define arrays using two syntaxes: the first is to use the type followed by square brackets (e.g., string[]), and the second is to use the Array generic type (e.g., Array<string>). Both syntaxes are equivalent, and you can choose the one that you prefer.
let hobbies: string[] = ["Reading", "Gaming", "Cooking"];
let scores: number[] = [90, 85, 95];

// Tuples: A fixed-size array with elements of specific types. They are useful when you want to represent a collection of values that have different types and a specific order.
let person: [string, number] = ["Raj", 30];

// Enums: A way to define a set of named constants. They can be numeric or string-based. Enums are useful for representing a collection of related values with meaningful names.
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;

// Any: A type that can hold any value. It is useful when you don't know the type of a variable in advance, but it should be used sparingly, as it bypasses TypeScript's type checking.
let randomValue: any = "Hello";
randomValue = 42; // No error, as 'randomValue' can hold any type

// Unknown: A type that represents a value that could be of any type, but unlike 'any', it requires type checking before performing operations on it. It is safer than 'any' because it forces you to check the type before using the value.
let unknownValue: unknown = "Hello";
unknownValue = 42; // No error, but you need to check the type before using it

// Void: A type that represents the absence of a value. It is commonly used as the return type for functions that do not return a value.
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined: Types that represent the absence of a value. In TypeScript, you can use 'null' and 'undefined' as types, but they are often used in combination with other types to indicate that a value may be missing.
let nullableValue: string | null = null;
let undefinedValue: string | undefined = undefined;

// Never: A type that represents values that never occur. It is typically used for functions that throw exceptions or have infinite loops.
function throwError(message: string): never {
  throw new Error(message);
}
