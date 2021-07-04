import React,{useContext} from 'react'
import Usercontext from "./Usercontext";
import Cartcontext from './cartContext';


export default function Movie_func() {

    const userContext = useContext(Usercontext);
    const cartContext = useContext(Cartcontext);

    console.log("Cart Context" , cartContext);

    return (
        <div>
            
            Movie Function {userContext.currentUser ? userContext.currentUser.name : ''}
        </div>
    )
}
