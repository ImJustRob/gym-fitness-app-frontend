import axios from "axios";
import { useState, useEffect } from "react";
import { RoutinesIndex } from "./RoutinesIndex";
import { RoutinesNew } from "./RoutinesNew";
import { RoutinesShow } from "./RoutinesShow";
import { Modal } from "./Modal";

export function RoutinesPage() {
  const [routines, setRoutines] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [isRoutinesShowVisible, setIsRoutinesShowVisible] = useState(false);
  const [currentRoutine, setCurrentRoutine] = useState({});

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

     const handleShow = (routine) => {
         console.log("handleShow", routine);
         setIsRoutinesShowVisible(true);
         setCurrentRoutine(routine);
       };

          const handleUpdate = (id, params, successCallback) => {
             console.log("handleUpdate", params);
             axios.patch(`http://localhost:3000/routines/${id}.json`, params).then((response) => {
               setRoutines(
                 routines.map((routine) => {
                   if (routine.id === response.data.id) {
                     return response.data;
                   } else {
                     return routine;
                   }
                 })
               );
               successCallback();
               handleClose();
             });
           };
        
    
       const handleClose = () => {
         console.log("handleClose");
         setIsRoutinesShowVisible(false);
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
      <RoutinesIndex routines={routines} onShow={handleShow} />
      <Modal show={isRoutinesShowVisible} onClose={handleClose}>
      <RoutinesShow routine={currentRoutine} onUpdate={handleUpdate} />
       </Modal>
    </main>
  );
}
