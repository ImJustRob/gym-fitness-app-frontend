export function ExercisesShow({ exercise }) {
    return (
      <div>
        <h1>Exercise information</h1>
        <p>Name: {exercise.name}</p>
        <p>Description: {exercise.description}</p>
        <p>Image: {exercise.image_url}</p>
        <p>Video: {exercise.video_url}</p>
      </div>
    );
  }