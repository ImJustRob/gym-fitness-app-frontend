export function ExercisesIndex({ exercises }) {
    return (
      <div>
        <h1>All Exercises</h1>
        {exercises.map((exercise) => (
         <div key={exercise.id}>
           <h2>{exercise.name}</h2>+           <img src={exercise.image_url} />
           <p>Video: {exercise.video_url}</p>
           <p>Description: {exercise.description}</p>
         </div>
       ))}
      </div>
    );
  }