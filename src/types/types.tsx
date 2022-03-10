export interface IAddress {
    street: string,
    city: string,
    zipcode: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress
}