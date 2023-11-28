import { Toaster } from 'sonner'
import './App.css'
import ListOfUsers from './components/ListOfUsers'
import { CreateNewUser } from './components/createNewUser'

function App() {
  return (
    <>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </>
  )
}

export default App
