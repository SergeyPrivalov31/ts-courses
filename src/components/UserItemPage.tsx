import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IUser } from '../types/types'
//Компонент не работает так как JsnoPlaceholder не вовзращает пользователей по одному



interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)  
    const params = useParams<UserItemPageParams>() 

    useEffect( () => {
        fetchUser()
      }, [])

      async function fetchUser(){
        try{
          const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users' + params.id);
          setUser(response.data)
        } catch (e) {
          alert(e)
        }
      }

  return (
    <div>
        <button>Назад</button>
        <h1>Страница пользователя {user?.name}</h1>
        <div>
            {user?.email}
        </div>
        <div>
            {user?.address.city} { user?.address.street} {user?.address.zipcode}
        </div>

    </div>
  )
}

export default UserItemPage