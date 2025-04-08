import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://organic-engine-6r9gpp9g9j434qpv-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Workouts</h1>
      <ul className="list-group">
        {workouts.map(workout => (
          <li key={workout._id} className="list-group-item">
            <h5>{workout.name}</h5>
            <p>{workout.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
