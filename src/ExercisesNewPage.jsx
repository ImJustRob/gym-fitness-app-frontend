import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ExercisesNew } from "./ExercisesNew";

export function ExercisesNewPage() {
  const navigate = useNavigate();

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      console.log(response);
      navigate("/photos");
    });
  };

  return (
    <div>
      <ExercisesNew onCreate={handleCreate} />
    </div>
  );
}