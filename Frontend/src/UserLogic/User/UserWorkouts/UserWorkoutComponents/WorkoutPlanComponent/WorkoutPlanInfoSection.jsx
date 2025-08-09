import '../../WorkoutsCss/Plan/Workout-info.css';
import SplitImg from '../../UserWorkoutsImg/Plan/split-training.jpg'
import PushPullLegs from '../../UserWorkoutsImg/Plan/push-pull-legs.jpg'

import Footer from '../../../../../components/Footer'

function WorkoutInfoPlanSection() {
    return (
        <div className="workout-info-container">
            <div className="workout-info-section">

               
                <section className="info-block">
                    <h1>How can I gain muscle in the gym or at home?</h1>
                    <p>
                        Gaining muscle, known as muscular hypertrophy, requires serious strength training. 
                        Strength training causes microscopic tears in the muscle fibres — which sounds scary, 
                        but is essential for growth. <br /> As your body repairs these tissues, they get bigger, and 
                        this repeated cycle results in visibly larger muscles.
                    </p>
                    <p>
                        While any strength training program will increase strength, certain approaches maximize 
                        hypertrophy. Below we’ll show you how to build an effective plan, plus offer example workouts.
                    </p>
                </section>

                
                <section className="info-block">
                    <h1>What are the benefits of building muscle?</h1>
                    <p>Besides aesthetics, building muscle offers key health benefits:</p>
                    <ul>
                        <li>Increases lean mass — burn more calories even at rest</li>
                        <li>Improves posture and strength imbalances</li>
                        <li>Boosts overall strength, balance and coordination</li>
                        <li>Strengthens bones and helps prevent bone loss</li>
                    </ul>
                </section>

                
                <section className="info-block">
                    <h1>Are free weights or machines better for gaining muscle?</h1>
                    <p>
                        Both can help you build muscle. According to studies, there’s no major difference in 
                        results — but each has advantages.
                    </p>
                    <p>
                        Resistance machines follow fixed paths, great for beginners or isolating muscles. 
                        They reduce injury risk and allow you to lift heavier safely.
                    </p>
                    <p>
                        Free weights like dumbbells require more stability and technique. They engage more 
                        muscles and promote better overall strength and coordination.
                    </p>
                    <p>
                        If you’re new, start with machines. Once confident, move to free weights to level up.
                    </p>
                </section>

                
                <section className="info-block">
                    <h1>Should I do "Split Workouts"?</h1>
                    <p>
                        Split workouts divide the week by muscle group or movement type — e.g., upper body 
                        one day, legs the next. They allow recovery between sessions.
                    </p>
                    <p>
                        To grow muscle effectively, train each group 2x per week. That means split routines 
                        are best if you're training 3–4+ times weekly. If you're limited to 2–3 days, full-body 
                        workouts work better.
                    </p>
                    <p>Examples of popular split plans:</p>
                    <ul>
                        <li>Push / Pull / Legs (6-day split)</li>
                        <li>Chest & Back / Legs / Shoulders & Arms (3-1-3 split)</li>
                        <li>Back & Biceps / Chest & Triceps / Legs / Shoulders (4-day split)</li>
                    </ul>
                    <p>
                        Push days target chest, shoulders, triceps. Pull days target back, biceps, glutes. 
                        Leg days are self-explanatory.
                    </p>
                </section>

                <div className='info-img-split'>
                    <img src={SplitImg} alt="" />
                </div>


                  <section className="info-block">
                    <h1>How important is nutrition for gaining muscle?</h1>
                    <p>
                        It's possible to build muscle without paying attention to nutrition, but it's much more efficient to do so when you are properly fuelling <br /> muscle growth with your diet.
                    </p>
                    <p>
                       If you are happy with your body fat and want to focus on building muscle, aim to eat in a slight calorie surplus (around 5-10% above your <br />  maintenance calories) and aim to get at least 1.4 grams of protein per kg of bodyweight, as recommended by the International Society <br />  of Sports Nutrition. Ideally, through nutritious protein sources like lean meats, eggs, legumes, and dairy.
                    </p>
                    
                    <p>
                        If you have a lot of excess fat stored and are trying to lose weight, you'll be pleased to know it's still possible to build muscle while in a <br />  calorie deficit. Protein is even more important when it comes to preserving and building muscle when dieting, as it helps to prevent your <br />  body from burning muscle instead of fat.
                    </p>
                </section>

                <div className='info-img-legs'>
                    <img src={PushPullLegs} alt="" />
                </div>

                <section className="info-block">
                    <h1>7-Day Split Workout Plan</h1>

                    <h2>Day 1: Push</h2>
                    <ul>
                        <li>Barbell bench press (3×8–12)</li>
                        <li>Barbell military press (3×8–12)</li>
                        <li>Dumbbell incline press (3×8–12)</li>
                        <li>Dumbbell lateral raises (3×8–12)</li>
                        <li>Dumbbell tricep extensions (3×8–12)</li>
                    </ul>

                    <h2>Day 2: Pull</h2>
                    <ul>
                        <li>Barbell deadlifts (3×8–12)</li>
                        <li>Barbell bent over rows (3×8–12)</li>
                        <li>Lat pulldowns (3×8–12)</li>
                        <li>Dumbbell upright rows (3×8–12)</li>
                        <li>Dumbbell single arm bicep curls (3×8–12)</li>
                    </ul>

                    <h2>Day 3: Legs</h2>
                    <ul>
                        <li>Barbell squats (3×8–12)</li>
                        <li>Bulgarian split squat (3×8–12)</li>
                        <li>Leg press (3×8–12)</li>
                        <li>Leg extensions (3×8–12)</li>
                        <li>Standing calf raises (3×8–12)</li>
                    </ul>

                    <h2>Day 4: Push</h2>
                    <ul>
                        <li>Push ups (3×8–12)</li>
                        <li>Barbell incline bench press (3×8–12)</li>
                        <li>Dumbbell shoulder press (3×8–12)</li>
                        <li>Tricep pushdowns (3×8–12)</li>
                    </ul>

                    <h2>Day 5: Pull</h2>
                    <ul>
                        <li>Pull ups (3×8–12)</li>
                        <li>Seated cable row (3×8–12)</li>
                        <li>Face pulls (3×8–12)</li>
                        <li>Barbell bicep curl (3×8–12)</li>
                        <li>Barbell good mornings (3×8–12)</li>
                    </ul>

                    <h2>Day 6: Legs</h2>
                    <ul>
                        <li>Goblet squats (3×8–12)</li>
                        <li>Lunges (3×8–12)</li>
                        <li>Hip thrust (3×8–12)</li>
                        <li>Romanian deadlifts (3×8–12)</li>
                        <li>Glute kickbacks (3×8–12)</li>
                    </ul>

                    <h2>Day 7: Rest</h2>
                    <p>Allow your body to recover, grow, and repair. Active recovery (like walking or light stretching) is optional but helpful.</p>
            </section>

            <section className="info-block">
                <h1>FAQs about Gaining Muscle in the Gym</h1>

                <h2>Should I do cardio when trying to build muscle?</h2>
                <p>
                    Yes, cardio can still play a role in a muscle-building plan. While strength training should be your main focus,
                    adding 1–2 short cardio sessions a week can support heart health, aid recovery, and help manage body fat.
                    Just be careful not to overdo it — too much cardio can interfere with muscle growth if it leaves you too fatigued
                    to train effectively or impacts your calorie surplus.
                </p>

                <h2>What's the difference between a muscle gain workout plan and a fat loss plan?</h2>
                <p>
                    Muscle gain plans focus on progressive overload and a calorie surplus to build size and strength.
                    Fat loss plans often include cardio, strength training, and a calorie deficit. Exercises may be similar,
                    but the nutrition and training intensity are tailored to your primary goal.
                </p>

                <h2>Do I need supplements or whey protein to gain muscle?</h2>
                <p>
                    No, supplements are not essential. A well-balanced diet with enough protein, calories, and recovery is most important.
                    Supplements like whey, creatine, or vitamin D can help if you're lacking something, but think of them as support, not magic.
                </p>

                <h2>Can I still follow this plan if I miss a day?</h2>
                <p>
                    Absolutely. Missing a day doesn’t ruin your progress. You can adjust the schedule or continue where you left off.
                    Long-term consistency matters more than weekly perfection.
                </p>

                <h2>How long will it take to see muscle gains?</h2>
                <p>
                    Most people begin to see changes within 6–12 weeks of consistent training and nutrition.
                    Beginners may experience "newbie gains" faster, while experienced lifters may progress more slowly.
                    Stay patient — progress adds up.
                </p>

                <h2>Do I have to lift heavy, or can I grow with lighter weights?</h2>
                <p>
                    You can build muscle with both heavy and light weights — the key is training close to failure.
                    Whether you're lifting heavy for low reps or lighter for high reps, progressive overload and intensity are essential.
                </p>

                <h2>Do vegetarians have trouble building muscle?</h2>
                <p>
                    Not necessarily. With enough protein, calories, and variety, vegetarians can build muscle effectively.
                    Focus on foods like tofu, lentils, beans, soy, and consider plant-based protein supplements if needed.
                </p>

                <h2>Are isolation movements necessary, or are compounds enough?</h2>
                <p>
                    Compound exercises should be your foundation, as they target multiple muscle groups.
                    But adding isolation movements helps fine-tune weak areas and improve muscle symmetry.
                </p>

                <h2>Can I build muscle while losing fat?</h2>
                <p>
                    Yes — especially if you're new to training. This process is called body recomposition.
                    With high protein intake, strength training, and a slight calorie deficit, you can lose fat and gain muscle at the same time.
                </p>
        </section>


                    <div>
                </div>
            </div>

            
        </div>
    );
}

export default WorkoutInfoPlanSection;
