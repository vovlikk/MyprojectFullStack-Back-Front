

import LandingPage from '../src/pages/LandingPage';
import Login from './BusinnesLogic/Authentication/LoginUser';
import Register from './BusinnesLogic/Authentication/RegisterUser';
import AdminDashboard from './BusinnesLogic/DashBoards/AdminDashboard';
import UserDashboard from './BusinnesLogic/DashBoards/UserDashboard';

import WorkoutHomePage from './UserLogic/User/UserWorkouts/WorkoutsPages/WorkoutsHomePage';


import './App.css'
import './StylesCss/fonts.css';
import {  Routes, Route, Router } from 'react-router-dom';
import WorkoutPlanLanding from './UserLogic/User/UserWorkouts/WorkoutsPages/WorkoutPlanLanding';
import WorkoutSets from './UserLogic/User/UserWorkouts/WorkoutsPages/WorkoutsSets';

import WorkoutVtaperLanding from './UserLogic/User/UserWorkouts/WorkoutsPages/WorkoutV-TAPER-Landing';

import WorkoutDanceLanding from './UserLogic/User/UserWorkouts/WorkoutsPages/WorkoutDanceLanding';

import UserProgressPage from './UserLogic/User/UserProgress/UserProgressPage/UserProgressPage';




function App() {
  return (
 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onClose={() => {}} />} />
        <Route path="/register" element={<Register onClose={() => {}} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path='/user/workouts' element={<WorkoutHomePage />} />
        <Route path='/user/workoutplan' element={<WorkoutPlanLanding />} />
        <Route path='/user/workoutsets' element={<WorkoutSets />} />
        <Route  path='/user/workoutvform' element={<WorkoutVtaperLanding />} />
        <Route path='/user/workoutdance' element={<WorkoutDanceLanding />} />

        <Route path='/user/workoutprogress' element={<UserProgressPage />} />
      </Routes>
    
  );
}

export default App;
