import React, { FC } from 'react'
import { IUser } from '../types/types'

interface IUserItem {
    user: IUser
}

const UserItem: FC<IUserItem> = ({user}) => {
    return (
        <div style={{ marginTop: '10px', padding: '15px', borderRadius: '5px', border: '1px solid lightGray' }}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    )
}

export default UserItem