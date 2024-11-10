export function RoutinesNew({ onCreate }) {

    const handleSubmit = (event) => {
      event.preventDefault();
      const params = new FormData(event.target);
      onCreate(params, () => event.target.reset());
    };

    return (
      <div>
        <h1>New Routine</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Exercise ID: <input name="exercise_id" type="text" />
          </div>
          <div>
            Reps: <input name="reps" type="text" />
          </div>
          <div>
            Sets: <input name="sets" type="text" />
          </div>
          <button type="submit">Create Routine</button>
        </form>
      </div>
    );
  }