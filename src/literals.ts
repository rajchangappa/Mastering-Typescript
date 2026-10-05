// A literal type means a variable can have one specific value, rather than an entire category of values.

// String literal types
let directions: "North" | "South" | "East" | "West";
directions = "North";

// Numberic literal types
let roll: 1 | 2 | 3 | 4 | 5 | 6;
roll = 6;

// Combining with other types
type SuccessResponse = { status: "success"; data: any };
type ErrorResponse = { status: "error"; message: string };

type APIResponse = SuccessResponse | ErrorResponse;
