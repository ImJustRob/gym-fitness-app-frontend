export function HomePage() {
  return (
    <div>
      <section className="welcome-section">
        <h1>Welcome To IronCore!</h1>
        <p>Your fitness journey continues. Let's make today count!</p>
      </section>

      <section className="fitness-tips">
        <h3>Daily Fitness Tip</h3>
        <p>"Stay hydrated during your workout!"</p>
      </section>

      <section className="featured-routines">
        <h2>Popular Routines</h2>
        <p>- Push Ups, 5 Sets, 20 Reps</p>
        <p>- Sit Ups, 4 Sets, 10 Reps</p>
        <p>- Squats, 3 Sets, 10 Reps</p>
      </section>

      <section className="exercise-of-the-day">
        <h3>Exercise of the Day</h3>
        <div className="exercise-details">
          <h4>Push-up</h4>
          <p>Tips: Keep your body in a straight line, engage your core, and lower your chest to the floor!</p>
        </div>
      </section>

      <section className="success-stories">
        <h3>Success Stories</h3>
        <p>Sarah’s Fitness Journey

        _"I started my fitness journey 6 months ago, completely new to working out. At first, I felt overwhelmed and unsure of where to begin. But with the help of IronCore, I found easy-to-follow routines and a supportive community. I started with just 15-minute workouts a few times a week and gradually built up to 45-minute sessions. Along the way, I tracked my progress, set small goals, and celebrated every win – no matter how small.

        Today, I’m down 20 pounds, feel stronger than ever, and have more energy than I’ve had in years. What’s even better is that I’ve developed a love for working out that I never thought was possible. Thank you, IronCore, for helping me find my fitness confidence!"_

        – Sarah M.
        Goal: Weight loss, strength building</p>
        <p>Jake’s Strength Transformation

        _"I’ve always struggled with staying consistent at the gym. I’d start a workout program, but after a few weeks, I’d lose motivation and fall off track. When I found IronCore, it was a game-changer. The workout routines were easy to follow and I loved how I could tailor them to my goals.

        I focused on building strength, and within just 3 months, I was lifting heavier weights and seeing real changes in my body. What I loved most was the app’s progress tracker—it kept me accountable and motivated to push through even on the tough days.

        Now, I feel stronger, more confident, and I'm excited about every workout. I’ve gained 15 pounds of muscle and I’m lifting double what I could before. IronCore didn’t just help me get fit; it helped me build a mindset of consistency and discipline. I’m ready for whatever challenge comes next!"_

        – Jake R.
        Goal: Build muscle and strength</p>
      </section>

    </div>
  );
}