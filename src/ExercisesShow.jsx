export function ExercisesShow({ exercise, onUpdate, onDestroy }) {

    const handleSubmit = (event) => {
             event.preventDefault();
             const params = new FormData(event.target);
             onUpdate(exercise.id, params, () => event.target.reset());
           };

    return (
      <div>
        <h1>Exercise information</h1>
        <p>Name: {exercise.name}</p>
        <p>Description: {exercise.description}</p>
        <p>Image: {exercise.image_url}</p>
        <p>Video: {exercise.video_url}</p>
        <form onSubmit={handleSubmit}>
         <div>
           Name: <input defaultValue={exercise.name} name="name" type="text" />
         </div>
         <div>
           Description: <input defaultValue={exercise.description} name="description" type="text" />
         </div>
         <div>
           Image: <input defaultValue={exercise.width} name="image_url" type="text" />
         </div>
         <div>
           Video: <input defaultValue={exercise.height} name="video_url" type="text" />
         </div>
         <button type="submit">Update Exercise</button>
       </form>
       <button onClick={() => onDestroy(exercise.id)}>Delete Exercise</button>
      </div>
    );
  }