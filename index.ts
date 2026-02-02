interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let todos: Todo[] = [];

function addTodo(title: string): Todo {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
}

function listTodos(): void {
  todos.forEach(todo => {
    console.log(
      `${todo.id}: ${todo.title} [${todo.completed ? "Completed" : "Pending"}]`
    );
  });
}

function completeTodo(id: number): void {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = true;
  }
}

function removeTodo(id: number): void {
  todos = todos.filter(todo => todo.id !== id);
}

/* ===== EXECUTION (REQUIRED) ===== */

addTodo("Learn TypeScript");
addTodo("Finish Lab 3");

listTodos();

completeTodo(1);
removeTodo(2);

listTodos();
