import React, { useState, useEffect } from 'react';

// DYNAMIC OBJECT PROPERTIES

const MultipleInputs = () => {
  // new useState as a new object
  const [person, setPerson] = useState({ firstName: '', email: '', job: '' });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.job) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', job: '' });
    }
  };

  return (
    <div>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="job">Job : </label>
            <input
              type="text"
              id="job"
              name="job"
              value={person.job}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, job } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{job}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default MultipleInputs;
