import { useLoaderData, useNavigate } from "react-router-dom";

import { ExercisesIndex } from "./ExercisesIndex";

export function ExercisesIndexPage() {
  const exercises = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (exercise) => {
    console.log("handleShow", exercise);
    navigate(`/exercises/${exercise.id}`);
  };

  return (
    <div>
      <ExercisesIndex exercises={exercises} onShow={handleShow} />
    </div>
  );
}