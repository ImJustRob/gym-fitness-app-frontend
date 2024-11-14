import React from "react";

export function ExercisesIndex({ exercises, onShow }) {
  return (
    <div>
      <h1>All Exercises</h1>
      {exercises.map((exercise) => {
        const videoId = exercise.video_url.split('v=')[1]?.split('&')[0];
        if (!videoId) {
          return <p key={exercise.id}>Video not available</p>;
        }

        return (
          <div key={exercise.id}>
            <h2>{exercise.name}</h2>
            <p>Description: {exercise.description}</p>            
            <img 
              src={exercise.image_url} 
              alt={`Image of ${exercise.name}`} 
              style={{ width: '100%', height: 'auto' }} 
            />
            <div style={{ marginBottom: '20px' }}>
              <iframe
                width="100%"   
                height="700"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={exercise.name}  
              ></iframe>
            </div>
            {/* <button onClick={() => onShow(exercise)}>Exercise info</button> */}
          </div>
        );
      })}
    </div>
  );
}
