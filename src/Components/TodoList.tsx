import { useTodoStore, type Todo } from '../Store/TodoStore';

const TodoList = () => {
  const { todos, deleteTodo, toggleTodo } = useTodoStore();

  return (
    <div className="space-y-4">
      {todos.map((todo: Todo) => (
        <li key={todo.id} className="flex items-center gap-2 p-2 border">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? 'line-through' : ''}>
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="ml-auto bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
