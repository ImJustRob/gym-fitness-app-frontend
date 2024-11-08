 export function ExercisesNew({ onCreate }) {

     const handleSubmit = (event) => {
       event.preventDefault();
       const params = new FormData(event.target);
       onCreate(params, () => event.target.reset());
     };
  
    return (
      <div>
        <h1>New Exercise</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Exercise Name: <input name="name" type="text" />
          </div>
          <div>
            Description: <input name="description" type="text" />
          </div>
          <div>
            Image: <input name="image_url" type="text" />
          </div>
          <div>
            Video: <input name="video_url" type="text" />
          </div>
          <button type="submit">Create Exercise</button>
        </form>
      </div>
    );
  }