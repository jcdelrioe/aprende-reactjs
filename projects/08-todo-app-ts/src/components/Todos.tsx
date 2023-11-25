import { ListOfTodos, TodoId, type Todo as TodoType } from '../types.d'
import { Todo } from './Todo'

export interface Props {
  todos: ListOfTodos
  onToggleCompletedTodo: ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed} ? 'completed' : ''`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompletedTodo={onToggleCompletedTodo}
          />
        </li>
      ))}
    </ul>
  )
}
