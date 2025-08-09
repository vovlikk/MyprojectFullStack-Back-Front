import { useState } from "react";
import '../AdminLogic.css/AdminUsers.css';
import { useApi } from "../../../Connect/ApiContext";



function Users(){  
    const[users,setusers] = useState([]);
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);
    const{apiUrl} = useApi();

    
    async function handleGetAllUsers(e) {
        e.preventDefault();
        setloading(true);
        seterror(null);
        
        try{
            const token = localStorage.getItem('token')
            const response = await fetch(`${apiUrl}/api/Admin/get-all-users` ,{
                headers: {
                    method: 'GET',
                    "Content-Type":"application/json",
                   Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "true"
                }
            });
           
            
            if(!response.ok){
                throw new Error("Fail to get users")
            }

            const data = await response.json();
            setusers(data);
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false)
        }
    }

    return(
       <div className="get-users-container">
            <div className="get-users-title">
                <h3>All Users</h3>
            </div>
            <button className="get-users-button" onClick={handleGetAllUsers}>
                Get All Users
            </button>

            {loading && <div className="get-users-loading">Loading...</div>}
            {error && <div className="get-users-error">{error}</div>}

            <ul className="get-users-list">
                {users.map(u => (
                    <li key={u.Id} className="get-users-item">
                        <strong>Email:</strong> {u.Email} | <strong>Name:</strong> {u.userName}
                    </li>
                ))}
            </ul>
        </div>
    )

    

}

export default Users;