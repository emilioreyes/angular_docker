interface User{
    userId:number,
    username: string,
    name: string,
    lastName: string,
    password: string,
    user: string,
    idIdentificationType: number,
    identification: String,
    phone: string,
    email: string,
    status: string,
    isLocked: string,
}

type Credentials = Pick<User,'username' | 'password'>
type UserResponse = Omit<User, 'username'>

export{ Credentials,UserResponse}