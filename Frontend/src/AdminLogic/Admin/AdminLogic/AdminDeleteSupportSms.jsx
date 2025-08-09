import { useState } from 'react';
import { useApi } from '../../../Connect/ApiContext';
import '../AdminLogic.css/AdminDeleteSupport.css';

function AdminDeleteSupport(){
    const[id,setId] = useState('');
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const { apiUrl } = useApi();
    async function DeleteId(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error('You need authorize');
            }
            

            const response = await fetch(`${apiUrl}/api/Admin/delete-sms/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`,
                    "ngrok-skip-browser-warning": "true"
                }
            })

            if(!response.ok){
                throw new Error("Fail to delete sms" + response.status)
            }

            alert("Sms was succesfull delete");

            setId('')
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <div className="admin-delete-support-container">
            <div className="form-wrapper">
                <form onSubmit={DeleteId} className="admin-delete-form-support">

                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter Id"
                    className="admin-delete-form-input"
                />
                <button type="submit" className="admin-delete-button-support">
                    Delete Id
                </button>
                </form>

            {loading && (
            <div className="loading-text">Loading...</div>
            )}

            {error && (
            <div className="error-text">{error}</div>
            )}
        </div>
</div>

    )
}

export default AdminDeleteSupport;