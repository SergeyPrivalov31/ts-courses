import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import EventsExample from './components/EventsExample'
import List from './components/List'
import TodoItem from './components/TodoItem'
import UserItem from './components/UserItem'
import UserList from './components/UserList'
import { ITodo, IUser} from './types/types'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

const  App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink style={{textDecoration: 'none'}} to='/users'>Пользователи</NavLink>
          <br />
          <NavLink style={{textDecoration: 'none'}} to='/todos'>Спислк дел</NavLink>
        </div>   
        <Route path='/users' >
          <UsersPage />
        </Route>   
        <Route path='/todos' >
          <TodosPage />
        </Route>   
        <Route path='/users/:id' >
          <UserItemPage />
        </Route>   
        <Route path='/todos/:id' >
          <TodoItemPage />
        </Route>   
      </div>
    </BrowserRouter>
  )
}

export default App