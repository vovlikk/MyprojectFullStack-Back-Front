import { useState } from "react";
import '../UserLogic.css/AddNumber.css'
import { useApi } from "../../../Connect/ApiContext";

function AddNumberUser(){
    const[newnumber,setnewnumber] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);
    const{apiUrl} = useApi();

    async function handleAddNumber(e){
        e.preventDefault(); 
        setloading(true);
        seterror(null);

        const info = {TelefoneNumber:newnumber};
        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error('You need authorize');
            }
            const response = await fetch(`${apiUrl}/api/User/add-number`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning": "true",
                },
                body:JSON.stringify(info)
            })

            if(!response.ok){
               throw new Error('Failed to add number');
            }
            
            alert("Number was succesfull added")
            setnewnumber('');
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false);
        }
    }

    return(
      <form className="phone-add-form" onSubmit={handleAddNumber}>
        <div className="phone-input-wrapper">
            <input
            type="text"
            className="phone-input-field"
            placeholder="Enter Your Number"
            value={newnumber}
            onChange={e => setnewnumber(e.target.value)}
            />
        </div>

        <button className="phone-submit-button" type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Number'}
        </button>

    {error && <div className="phone-error-message">{error}</div>}
    </form>

        
    )
}

export default AddNumberUser;