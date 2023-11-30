import { useUsers } from '../hook/useUsers'

export const Results = () => {
  const { users } = useUsers()
  return <h3>Results: {users.length}</h3>
}
