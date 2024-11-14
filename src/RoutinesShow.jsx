export function RoutinesShow({ routine }) {
    return (
      <div>
        <h1>Routine information</h1>
        <p>User: {routine.user && routine.user.name}</p>
           <p>Exercise Name: {routine.exercise && routine.exercise.name}</p>
           {/* <p>Exercise ID: {routine.exercise_id}</p> */}
           <p>Reps: {routine.reps}</p>
           <p>Sets: {routine.sets}</p>
      </div>
    );
  }