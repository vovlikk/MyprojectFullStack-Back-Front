import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../UserPagesCss/UserDelete.css'
import { useApi } from "../../../Connect/ApiContext";

function UserDelete(){
    const[emaildelete,setemail] = useState('');
    const[passworddelete,setpassword] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);
    const navigate = useNavigate();
    const{apiUrl} = useApi();

    async function DeleteUser(e) {
        e.preventDefault();
        setloading(true);
        seterror(null);

        const userdelete ={
            Email:emaildelete,
            Password:passworddelete
        };
        try{
            const token = localStorage.getItem('token')
            const response = await fetch(`${apiUrl}/api/User/delete-user`,{
                method:"DELETE",
                body: JSON.stringify(userdelete),
                headers:{
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                }
            })
            if(!response?.ok){
                throw new Error(response.status || "Fail to delete user")
            }
            navigate('/')
            alert('Account was deleted')
        }
        catch(err){
            seterror(err.message || "Fail to delete user")
        }
        finally{
            setloading(false);
        }
    }

    return(
        <div className="delete-overlay" >
            <div className="delete-body">
                <div className="delete-input">
                    <input type="email" placeholder="enter email" value={emaildelete} onChange={e => setemail(e.target.value)} />
                    <input type="password" placeholder="enter password" value={passworddelete} onChange={e => setpassword(e.target.value)}></input>
                    <h3>Are you Sure?</h3>
                </div>
                <div className="delete-button">
                    
                    <button onClick={DeleteUser}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default UserDelete;