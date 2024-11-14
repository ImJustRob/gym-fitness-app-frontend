export function RoutinesShow({ routine, onUpdate, onDestroy }) {
   
       const handleSubmit = (event) => {
             event.preventDefault();
             const params = new FormData(event.target);
             onUpdate(routine.id, params, () => event.target.reset());
           };

    return (
      <div>
        <h1>Routine information</h1>
           <p>Name: {routine.user && routine.user.name}</p>
           <p>Exercise: {routine.exercise && routine.exercise.name}</p>
           {/* <p>Exercise ID: {routine.exercise_id}</p> */}
           <p>Reps: {routine.reps}</p>
           <p>Sets: {routine.sets}</p>
           <form onSubmit={handleSubmit}>
         {/* <div>
           User: <input defaultValue={routine.user && routine.user.name} name="user" type="text" />
         </div>
         <div>
           Exercise Name: <input defaultValue={routine.exercise && routine.exercise.name} name="exercise" type="text" />
         </div> */}
         <div>
           Reps: <input defaultValue={routine.reps} name="reps" type="text" />
         </div>
         <div>
           Sets: <input defaultValue={routine.sets} name="sets" type="text" />
         </div>
         <button type="submit">Update Routine</button>
       </form>
       <button onClick={() => onDestroy(routine.id)}>Delete Routine</button>
      </div>
    );
  }