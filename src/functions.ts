// Basic function in TypeScript with type annotations for parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Function with optional parameter
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// Function with default parameter
function multiply(a: number, b: number = 1): number {
  return a * b;
}

// Function with rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function with union types
function formatValue(value: string | number): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value.toUpperCase();
}
