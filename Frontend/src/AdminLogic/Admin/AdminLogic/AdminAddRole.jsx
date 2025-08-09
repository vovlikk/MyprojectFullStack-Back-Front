import { useState } from "react";
import '../AdminLogic.css/AdminAddRole.css'
import { useApi } from '../../../Connect/ApiContext';


function AddRole(){
    const[user,setUser] = useState('');
    const[loading,setloading] = useState(false);
    const[error, seterror] = useState(null);
     const { apiUrl } = useApi();
    async function Role(e) {
        e.preventDefault();
        seterror(null);
        setloading(true);
        const userrole = {UserName: user}

        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error("You need Authorization!")
            }
            const response = await fetch(`${apiUrl}/api/Admin/add-role-admin`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(userrole)
            });

            if(!response.ok){
                throw new Error(response.status || "Fail to add role")
            }

            alert('Role added successfully')
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false);
        }

    }

    return(
         <div className="add-role-container">
            <h3 className="add-role-title">Add Role</h3>
        <form className="add-role-form" onSubmit={Role}>
            <input
            type="text"
            className="add-role-input"
            value={user}
            placeholder="Enter username"
            onChange={e => setUser(e.target.value)}
            />
            <button type="submit" className="add-role-button" disabled={loading}>
            {loading ? "Adding..." : "Add Role"}
            </button>
        </form>
      {error && <div className="add-role-error">{error}</div>}
    </div>
    )
}

export default AddRole;