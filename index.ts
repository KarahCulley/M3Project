class Todo {
    constructor(
        public id: number,
        public task: string,
        public completed: boolean = false
    ) {}
}

class TodoList {
    private todos: Todo[] = [];

    addTodo(task: string): void {
        const id = this.todos.length + 1;
        this.todos.push(new Todo(id, task));
    }

    listTodos(): void {
        this.todos.forEach(todo => {
            console.log(`${todo.id}: ${todo.task} [${todo.completed ? "Done" : "Pending"}]`);
        });
    }
}

const myTodos = new TodoList();
myTodos.addTodo("Finish TypeScript assignment");
myTodos.addTodo("Submit to GitHub");
myTodos.listTodos();
