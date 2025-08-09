import React, { useEffect, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

import { useApi } from "../../../../Connect/ApiContext";

import '../UserProgress.css/UserProgressGrafics.css'

function WorkoutProgressGrafic({onClose}) {
  const [data, setData] = useState([]);
  const[month,setMonth] = useState('');
  const[workouts,setWorkouts] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const{apiUrl} = useApi();

  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${apiUrl}/api/UserProgressWorkouts/workouts-everymounth`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true"
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error:", err);
        setError("Error fetching workout data");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutData();
  }, []);

  async function ChangeInfoWorkout(e){
   e.preventDefault(); 
    setLoading(true);
    setError(null);

    const info = {
    month: parseInt(month),
    workout: parseInt(workouts)
  };

    try{
        const token = localStorage.getItem('token');
        if(!token){
            throw new Error('You need authorize');
        }

        const response = await fetch(`${apiUrl}/api/UserProgressWorkouts/change-workout-info`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(info)
        })
        if(!response.ok){
            const text = await response.text();
            throw new Error("Fail to change info" + text)
        }

        alert("Info was succesfull changed");
        setMonth('');
        setWorkouts('')
    }
    catch(err){
        setError(err.message);
    }
    finally{
        setLoading(false);
    }


  }

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-progress-grafics-container" onClick={onClose}>
  <div className="user-progress-grafics-section" onClick={e => e.stopPropagation()}>
    <div className="user-progress-grafics-header">
      <h3>Monthly Workout Progress</h3>
    </div>
    <div className="user-progress-grafics-chart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="workout" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>


            <div className="user-progress-change-form">
        <h4>Update Workout Info</h4>
        <form onSubmit={ChangeInfoWorkout} className="change-form">
            <div className="form-group">
            <label htmlFor="month">Month (1–12):</label>
            <input
                type="number"
                id="month"
                min="1"
                max="12"
                placeholder="e.g. 8"
                value={month}
                onChange={e => setMonth(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label htmlFor="workouts">Workouts:</label>
            <input
                type="number"
                id="workouts"
                min="0"
                placeholder="e.g. 15"
                value={workouts}
                onChange={e => setWorkouts(e.target.value)}
            />
            </div>
            <button type="submit">Save Changes</button>
        </form>
        </div>
  </div>
</div>

  );
}

export default WorkoutProgressGrafic;
