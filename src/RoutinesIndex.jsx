export function RoutinesIndex({ routines }) {
    return (
      <div>
        <h1>All routines</h1>
       {routines.map((routine) => (
         <div key={routine.id}>
           <p>User ID: {routine.user_id}</p>
           <p>Exercise Name: {routine.exercise && routine.exercise.name}</p>
           <p>Exercise ID: {routine.exercise_id}</p>
           <p>Reps: {routine.reps}</p>
           <p>Sets: {routine.sets}</p>
         </div>
       ))}
      </div>
    );
  }