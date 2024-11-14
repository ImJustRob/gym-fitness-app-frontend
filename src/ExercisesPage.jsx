import axios from "axios";
import { useState, useEffect } from "react";
import { ExercisesIndex } from "./ExercisesIndex";
// import { ExercisesNew } from "./ExercisesNew";
// import { ExercisesShow } from "./ExercisesShow";
// import { Modal } from "./Modal";

export function ExercisesPage() {
  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleShow = (exercise) => {
    console.log("handleShow", exercise);
    setIsExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };

  const handleUpdate = (id, params, successCallback) => {
    console.log("handleUpdate", params);
    axios.patch(`http://localhost:3000/exercises/${id}.json`, params).then((response) => {
      setExercises(
        exercises.map((exercise) => {
          if (exercise.id === response.data.id) {
            return response.data;
          } else {
            return exercise;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroy = (id) => {
    console.log("handleDestroy", id);
    axios.delete(`http://localhost:3000/exercises/${id}.json`).then(() => {
      setExercises(exercises.filter((exercise) => exercise.id !== id));
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsExercisesShowVisible(false);
  };

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <input
        type="text"
        placeholder="Search exercises..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* <ExercisesNew onCreate={handleCreate} /> */}
      <ExercisesIndex exercises={filteredExercises} onShow={handleShow} />
      {/* <Modal show={isExercisesShowVisible} onClose={handleClose}>
        <ExercisesShow exercise={currentExercise} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal> */}
    </main>
  );
}
