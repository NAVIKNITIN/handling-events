import React,{useContext} from 'react'
import Usercontext from './Usercontext'
export default function Login() {
    const userContext = useContext(Usercontext)
    return (
        <div>
            <button onClick={()=>userContext.onLogin("username")}>Login</button>
        </div>
    )
}
