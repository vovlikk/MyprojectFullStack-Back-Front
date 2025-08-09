import { useState } from "react"
import '../UserLogic.css/UserReview.css'
import { useApi } from "../../../Connect/ApiContext";

function UserReview(){
    
    const[userReview,setDescripReview] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);
    const{apiUrl} = useApi();

    async function SendReview(e) {
        e.preventDefault();
        setloading(true);
        seterror(null);
        const info = {Review:userReview }

        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error('You need authorization');
            }
            const response = await fetch(`${apiUrl}/api/User/submit-review-tosupport`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            })

            if(!response.ok){
                throw new Error("Fail to send review")
            }

            alert("Send Review Succesfull");
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false);
        }
    }

    return(
       <div className="review-form-container">
   

    <input
        type="text"
        className="review-input-text"
        placeholder="Enter your Review"
        value={userReview}
        onChange={e => setDescripReview(e.target.value)}
    />

    <button
        className="review-submit-button"
        onClick={SendReview}
    >
        Send Review
    </button>

    {loading && <div className="review-loading">Loading...</div>}
    {error && <div className="review-error-message">{error}</div>}
    </div>
    )
}

export default  UserReview;