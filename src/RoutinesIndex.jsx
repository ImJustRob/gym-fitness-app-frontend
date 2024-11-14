export function RoutinesIndex({ routines, onShow }) {
    return (
      <div>
        <h1>All routines</h1>
       {routines.map((routine) => (
         <div key={routine.id}>
           <p>Name: {routine.user && routine.user.name}</p>
           <p>Exercise: {routine.exercise && routine.exercise.name}</p>
           {/* <p>Exercise ID: {routine.exercise_id}</p> */}
           <p>Reps: {routine.reps}</p>
           <p>Sets: {routine.sets}</p>
           <button onClick={() => onShow(routine)}>Routine info</button>
         </div>
       ))}
      </div>
    );
  }