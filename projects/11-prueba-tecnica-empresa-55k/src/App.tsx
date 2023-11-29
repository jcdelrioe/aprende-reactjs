import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { SortBy, type User } from './types.d'
import { UsersList } from './components/UsersList'

function App() {
  const [users, setUsers] = useState<Array<User>>([])
  const [showcolors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showcolors)
  }

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => {
      return user.email !== email
    })
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <h1>Prueba 55k</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>
          {sorting === SortBy.COUNTRY ? 'Desordenar' : 'Ordenar por país'}
        </button>
        <button onClick={handleReset}>Resetear estados</button>
        <input
          placeholder='Filtra por país'
          onChange={(e) => {
            setFilterCountry(e.target.value)
          }}
        />
      </header>
      <main>
        <UsersList
          changeSorting={handleChangeSort}
          deleteUser={handleDelete}
          showColors={showcolors}
          users={sortedUsers}
        />
      </main>
    </>
  )
}

export default App
