import { useState,useEffect } from "react";
import '../AdminLogic.css/AdminReviews.css'
import { useApi } from "../../../Connect/ApiContext";

function AdminReview(){
    const[adminreviews,setreviews] = useState([]);
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);
    const {apiUrl} = useApi();

    async function handleGetAllReviews() {
   
    setloading(true);
    seterror(null);

    try{
        const token = localStorage.getItem('token')
          if(!token) {
                throw new Error("You are not authorized");
            }
            const response = await fetch(`${apiUrl}/api/Admin/reviews-messages`,{
              
                headers: {"Content-Type":"application/json" ,
                Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "true"
                },
            })

            if(!response.ok){
                throw new Error('Fail to get reviews')
            }

            const data = await response.json();
            setreviews(data);
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false);
        }
    }
    useEffect(()=>{
      handleGetAllReviews();
    },[])

    return(
        <div className="get-reviews-container">
  <div className="get-reviews-title">
    <h3>All Reviews</h3>
  </div>
  

  {loading && <div className="get-reviews-loading">Loading...</div>}
  {error && <div className="get-reviews-error">{error}</div>}

  <ul className="get-reviews-list">
    {adminreviews.map((r) => (
      <li key={r.Id} className="get-reviews-item">
         <strong>Review:</strong> {r.review}
      </li>
    ))}
  </ul>
</div>
    )
}

export default AdminReview;