// Partial

// interface Address {
//     email: string;
//     address: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = { email: 'john@abc.com'};
// const all: Address = { email: 'john@abc.com', address: 'john' };

// // Pick

// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo = {
//     title: "Clean Room",
//     completed: false
// }

// Omit
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo = {
    title: " clean room",
    completed: false,
    createdAt: 12432123124,
}

// Exclude
