import React from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'

const  App = () => {
  const users: IUser[] = [
    {id: 1, name: 'John', username: 'Johnson', email: 'john@example.com', address: {city: 'London', street: 'BaickerStreet', zipcode: '1234567!'}},
    {id: 2, name: 'Serg', username: 'Bro', email: 'serg@example.com', address: {city: 'Moscow', street: 'Pushkin', zipcode: '7654321!'}},
  ]
  return (
    <div>
      <Card onClick={()=> console.log('Клик!')} variant={CardVariant.outlined} width='200px' height='200px'>
        <div>
        <button>
          Кнопка
        </button>
          <div>
            Какой-то текст
          </div>
        </div>
      </Card>
      <UserList users={users} />
    </div>
  )
}

export default App