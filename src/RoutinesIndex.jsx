export function RoutinesIndex({ routines }) {
    return (
      <div>
        <h1>All routines</h1>
       {routines.map((routine) => (
         <div key={routine.id}>
           <p>User: {routine.user && routine.user.name}</p>
           <p>Exercise Name: {routine.exercise && routine.exercise.name}</p>
           {/* <p>Exercise ID: {routine.exercise_id}</p> */}
           <p>Reps: {routine.reps}</p>
           <p>Sets: {routine.sets}</p>
         </div>
       ))}
      </div>
    );
  }