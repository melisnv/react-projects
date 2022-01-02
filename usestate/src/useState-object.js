import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Melis Nur',
    age: 25,
    job: 'Computer Engineer',
  });
  console.log(person);

  // spread operator
  const changeJob = () => {
    setPerson({
      ...person,
      job: 'Student at Vrije Universiteit Amsterdam',
    });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.job}</h3>
      <button className="btn" onClick={changeJob}>
        Change
      </button>
    </>
  );
};

export default UseStateObject;
