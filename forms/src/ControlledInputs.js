import React, { useState, useEffect } from 'react';

// Could add onSubmit on the form element or add it on the button.

const ControlledInput = () => {
  // state values
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  // to add new person we need to have an empty list of people
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent refreshing the page

    // checking if firstName and email is not empty
    if (firstName && email) {
      // creating a new person object
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });

      // clearing the inputs
      setFirstName('');
      setEmail('');
    } else {
      console.log('Empty values.');
    }
  };

  return (
    <div>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add User</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default ControlledInput;
