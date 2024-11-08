import axios from "axios";
import { useState, useEffect } from "react";
import { ExercisesIndex } from "./ExercisesIndex"
import { ExercisesNew } from "./ExercisesNew";

export function ExercisesPage() {
  const [exercises, setExercises] = useState([]);

   const handleIndex = () => {
     console.log("handleIndex");
     axios.get("http://localhost:3000/exercises.json").then((response) => {
       console.log(response.data);
       setExercises(response.data);
     });
   };

   const handleCreate = (params, successCallback) => {
         console.log("handleCreate", params);
         axios.post("http://localhost:3000/exercises.json", params).then((response) => {
           setExercises([...exercises, response.data]);
           successCallback();
         });
       };

   useEffect(handleIndex, []);

    return (
      <main>
        <ExercisesNew onCreate={handleCreate} />
        <ExercisesIndex exercises={exercises} />
      </main>
    )
  }