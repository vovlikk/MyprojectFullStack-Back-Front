import '../../WorkoutsCss/Sets/WorkoutSetsInfo.css'

function WorkoutSetsInfo(){
    return(
        <div className="workouts-sets-info-container">
            <div className="workouts-sets-info-sections">

                <section className="sets-info-text">
                    <h1>WHAT ARE REPS AND SETS?</h1>

                    <p>Reps, short for repetitions, refers to one full movement of an exercise from start to finish. Sets are a group of reps performed after each <br /> other without rest, with a rest interval between each set.</p>

                    <p>For example, 3 sets of 8 squats would be doing 8 squats in a row, three times with a rest in between each set of eight.</p>

                    <p>Reps and sets are important to help structure your workouts and keep track of your progress.</p>
                </section>

                <section className="sets-info-text">
                    <h1>ARE REPS OR SETS MORE IMPORTANT?</h1>

                    <p>Reps and sets are a way to plan and progress your workout volume, with neither more nor less important than the other: you can achieve <br />the same amount of volume doing 8 sets of 3 reps as doing 3 sets of 8 reps.</p>
                    <p>However, changing the combination of reps and sets along with the load lifted can help you to achieve different fitness goals more effectively, which is looked at in more detail below.</p>
                </section>


                <section className="sets-info-text">
                    <h1>HOW LONG BETWEEN REPS AND SETS?</h1>

                    <p>Lifting weights requires the muscles to use their energy stores to produce force. As blood is pumped around the body, it delivers oxygen <br /> and nutrients to the muscles which can be used as energy. Resting between sets allows your muscles to recover from the previous set, so <br /> that they can produce as much force and intensity in the next set.</p>

                    <p>The rest time can vary between 1 – 5 minutes depending on the intensity and volume of each set.</p>
                </section>


                <section className="sets-info-text">
                    <h1>HOW TO CHOOSE YOUR REPS AND SETS BASED ON YOUR FITNESS GOAL</h1>

                    <p>Changing the number of reps and sets, along with the weight lifted, can help you to reach your fitness goals more effectively. For strength, <br /> go for higher weights lifted for lower reps. For maintaining or increasing muscle mass, moderate weights lifted for moderate to high reps is <br /> best.</p>
                </section>


                <section className="sets-info-text">
                    <h1>HOW MANY REPS AND SETS FOR BUILDING STRENGTH?</h1>
                        <ul>
                            <li>3 - 5 sets</li>
                            <li>6 - 12 reps</li>
                            <li>1 - 3 minutes rest</li>
                        </ul>
                    <p>When it comes to building muscle mass, moderate reps and moderate to high sets helps to create the volume and time under tension <br /> needed to stimulate muscle growth. Choose weights that take you close to failure in each set and aim to progressively overload by <br /> increasing either the weights or reps each week.</p>
                </section>



                <section className="sets-info-text">
                    <h1>HOW MANY REPS AND SETS FOR MAINTAINING LEAN MUSCLE?</h1>
                        <ul>
                            <li>3 - 4 sets</li>
                            <li>8 - 12 reps</li>
                            <li>1 - 2 minutes rest</li>
                        </ul>
                    <p>Maintaining lean muscle follows the same reps and sets as fat loss and muscle hypertrophy, as the muscles still need to be stimulated to <br /> maintain their size. However, if you only want to maintain your muscle mass rather than increase it, you don't need to train as close to <br /> failure.</p>
                </section>

                 <section className="sets-info-text">
                    <h1>EXAMPLE TRAINING PLANS USING DIFFERENT REP/SET RANGES</h1>

                    <p>Because the optimal reps and sets differ for different workout goals, workout plans will look different depending on what you want to <br /> achieve. Here are some example full body workout plans for different objectives.</p>
                </section>

                <section className="sets-info-text">
                    <h1>TRAINING FOR MUSCLE GROWTH</h1>
                        <p>If building muscle mass is your main goal, train each muscle group 2-3 times a week, focusing on moderate to high reps and moderate <br /> weight.  </p>

                        <ul>
                            <li>Barbell squats - 3 x 10-12 reps, 1 minute rest</li>
                            <li>RDLs - 4 x 8-10 reps, 1 minute rest</li>
                            <li>Bent over rows - 3 x 10-12 reps, 1 minute rest</li>
                            <li>Dumbbell chest press - 4 x 8-10 reps, 1 minute rest</li>
                            <li>Shoulder press machine - 3 x 8-10 reps, 1 minute rest</li>
                        </ul>
                    <p></p>
                </section>

                <section className="sets-info-text">
                    <h1>HTRAINING FOR STRENGTH</h1>
                    <p>For strength, lift weights 3-4 times a week and include some explosive plyometric exercises as part of your warm up, as a finisher, or in <br /> your cardio workouts.</p>
                    <li>Barbell squats - 5 x 5 reps, 2 minutes rest</li>
                    <li>Barbell deadlifts - 4 x 5 reps, 2 minutes rest</li>
                    <li>Lat pulldowns - 4 x 5 reps, 2 minutes rest</li>
                    <li>Barbell bench press - 5 x 5 reps, 2 minutes rest</li>
                    <li>Overhead press - 4 x 5 reps, 2 minutes rest</li>
                    
                </section>

                 <section className="sets-info-text">
                    <h1>TRAINING FOR FAT LOSS</h1>
                    <p>Your main focus when training for fat loss should be maintaining muscle mass while you lose weight. Include a mixture of cardio workouts <br /> to increase your weekly calories burnt, and 2-3 strength workouts each week to preserve muscle.</p>

                    <ul>
                        <li>Barbell squats - x 3 10-12 reps, 1 minute rest</li>
                        <li>Hip thrusts - 3 x 10-12 reps, 1 minute rest</li>
                        <li>Seated rows - 3 x 8-10 reps, 1 minute rest</li>
                        <li>Shoulder press machine - 3 x 10-12 reps, 1 minute rest</li>
                        <li>Chest press machine - 3 x 10-12 reps, 1 minute rest</li>
                    </ul>
                </section>
                
            </div>
        </div>
    )
}

export default WorkoutSetsInfo;