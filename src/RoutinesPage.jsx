 import axios from "axios";
 import { useState, useEffect } from "react";
import { RoutinesIndex } from "./RoutinesIndex"

export function RoutinesPage() {
       const [routines, setRoutines] = useState([]);

       const handleIndex = () => {
         console.log("handleIndex");
         axios.get("http://localhost:3000/routines.json").then((response) => {
           console.log(response.data);
           setRoutines(response.data);
         });
       };
    
       useEffect(handleIndex, []);

    return (
      <main>
        <RoutinesIndex routines={routines} />
      </main>
    )
  }