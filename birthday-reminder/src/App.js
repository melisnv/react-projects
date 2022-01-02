import React, { useState } from 'react';
import './App.css';
import List from './List';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button className="container__button" onClick={() => setPeople([])}>
          Click Here
        </button>
      </section>
    </main>
  );
}

export default App;
