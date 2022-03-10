
import React from 'react'
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
          <NavLink style={{textDecoration: 'none'}} to='/todos'>Список дел</NavLink>
        </div>   
        <Route path='/users' >
          <UsersPage />
        </Route>   
        <Route path='/todos' >
          <TodosPage />
        </Route>   
        <Route path='/user/:id' >
          <UserItemPage />
        </Route>   
        <Route path='/todo/:id' >
          <TodoItemPage />
        </Route>   
      </div>
    </BrowserRouter>
  )
}

export default App