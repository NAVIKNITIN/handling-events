import React,{useContext} from 'react'
import Usercontext from './Usercontext'

const ArrowMovie = () => {
    const userContext = useContext(Usercontext);
    console.log(userContext)
    return (
        <div>
           arrow funct consumer {userContext.currentUser ? userContext.currentUser.name : ''}
        </div>
    )
}

export default ArrowMovie
