import {createContext,Dispatch,SetStateAction,useState,ReactNode} from 'react';


export type User ={
    firstName:string,
    lastName:string,
    username:string,
}

export interface UserContextInterface {
    user:User,
    setUser:Dispatch<SetStateAction<User>>
}

// const defaultState = {
//     user:{
//     firstName:'',
//     lastName:'',
//     username:'',
//     },
//     setUser:(user:User) => {}
// } as UserContextInterface

export const UserContext = createContext<UserContextInterface>({
    user: {
        firstName: '',
        lastName: '',
        username: '',
    },
    setUser: () => {},
});

type UserProvideProps = {
    children:ReactNode
}

export default function UserProvider({children}:UserProvideProps)
{
    const [user,setUser] = useState<User>({
        firstName:'',
    lastName:'',
    username:'',
    });

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}