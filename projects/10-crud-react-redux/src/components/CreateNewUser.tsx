import { Badge, Button, Card, TextInput, Title } from '@tremor/react'
import { useUserActions } from '../hook/useUserActions'
import { useState } from 'react'

export function CreateNewUser() {
  const { addUser } = useUserActions()
  const [result, setResult] = useState<'ok' | 'ko' | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
    event.preventDefault()

    setResult(null)

    const form = event.target
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github) {
      return setResult('ko')
    }

    addUser({ name, email, github })
    setResult('ok')
    form.reset()
  }
  return (
    <Card style={{ marginTop: '16px' }}>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit}>
        <TextInput name='name' placeholder='Aqui el nombre' />
        <TextInput name='email' placeholder='Aqui el email' />
        <TextInput name='github' placeholder='Aqui el usuario de Github' />
        <div>
          <Button type='submit' style={{ marginTop: '16px' }}>
            Crear usuario
          </Button>
          <span>
            {result === 'ok' && (
              <Badge color='green'>Guardado correctamente</Badge>
            )}
            {result === 'ko' && <Badge color='red'>Error con los campos</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}
