// Utility types are built-in tools that let you transform existing types into new types without rewriting them.

interface Tasks {
  title: string;
  description?: string;
  completed?: boolean;
  createdAt: Date;
  assignedTo?: string;
}

// Partial : Makes properties optional
type PartialTask = Partial<Tasks>;
let updateTask: PartialTask = { completed: true };

// Required : Makes properties required
type RequiredTask = Required<Tasks>;
let updateTask2: RequiredTask = {
  title: "New task",
  description: "Task description",
  completed: false,
  createdAt: new Date(),
  assignedTo: "Author",
};

// Readonly : Makes properties read-only
type ReadOnlyTask = Readonly<Tasks>;
let myTasks: ReadOnlyTask = {
  title: "Understand TypeScript",
  description: "Complete basics",
  completed: false,
  createdAt: new Date(),
  assignedTo: "Raj",
};

// myTasks.completed = true;

// Pick : Picks specific properties
type TaskPreview = Pick<Tasks, "title" | "completed">;

// Omit : Omits specific properties
type Task = Omit<Tasks, "createdAt">;

// Record : Construct object type with specific keys and value types
type PageDetail = {
  title: string;
  url: string;
};

type Pages = "home" | "about" | "contact";

type Merged = Record<Pages, PageDetail>;

let pages: Merged = {
  home: { title: "Home", url: "www.page/.com" },
  about: { title: "About", url: "www.page/about.com" },
  contact: { title: "Contact", url: "www.page/contact.com" },
};

// Return : get return type of a function
function createUser() {
  return {
    id: 1,
    name: "Steve",
    email: "rogersteve@avengers.com",
  };
}

type userType = ReturnType<typeof createUser>;
