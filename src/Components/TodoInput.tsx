import { useForm } from 'react-hook-form';
import { useTodoStore } from '../Store/TodoStore';

type TodoFormData = {
  text: string;
};

const TodoInput = () => {
  const { register, handleSubmit, reset } = useForm<TodoFormData>();
  const addTodo = useTodoStore((state) => state.addTodo);

  const onSubmit = (data: TodoFormData) => {
    if (data.text.trim()) {
      addTodo(data.text);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <input
        type="text"
        {...register('text')}
        className="border p-2 mr-2"
        placeholder="Add new todo"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
