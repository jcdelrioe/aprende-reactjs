import { TodoTitle } from '../types.d'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>todo</h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
