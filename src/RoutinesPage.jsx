import axios from "axios";
import { useState, useEffect } from "react";
import { RoutinesIndex } from "./RoutinesIndex";
import { RoutinesNew } from "./RoutinesNew";

export function RoutinesPage() {
  const [routines, setRoutines] = useState([]);
  const [exercises, setExercises] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate", params);
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      setRoutines([...routines, response.data]);
      successCallback();
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      setExercises(response.data);
    });
  }, []);

  useEffect(handleIndex, []);

  return (
    <main>
      <RoutinesNew onCreate={handleCreate} exercises={exercises} />
      <RoutinesIndex routines={routines} />
    </main>
  );
}
