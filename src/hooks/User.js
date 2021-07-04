import React ,{useState ,useEffect} from 'react'
import axios from "axios";


const User = () => {
    const [users ,setusers] = useState ([]);

    const url = 'https://jsonplaceholder.typicode.com/users';
    
    useEffect(() => {
        
        async function getUsers(){
            const result = await axios.get(url);
            setusers(result.data);

        }

        getUsers();
        
    });

    return (
        <div>
            <ul>
                {users.map(user =>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default User
