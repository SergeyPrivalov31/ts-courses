import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import List from './components/List'
import UserItem from './components/UserItem'
import UserList from './components/UserList'
import { IUser } from './types/types'

const  App = () => {
    const [users, setUsers] = useState<IUser[]>([])  

    useEffect( () => {
      fetchUsers()
    }, [])

    async function fetchUsers(){
      try{
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data)
      } catch (e) {
        alert(e)
      }
    }
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
      <List items={users} renderItem={(user: IUser) => <UserItem key={user.id} user={user} />} />
    </div>
  )
}

export default App