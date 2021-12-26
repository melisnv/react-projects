import React from 'react';
import { useState } from 'react';

const ErrorExample = () => {
  const [title, setTitle] = useState('Attendance List');

  const handleClick = () => {
    let newTitle = 'Special Guests';
    if (title === 'Attendance List') {
      setTitle(newTitle);
    } else {
      setTitle('Attendance List');
    }
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        This is button
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
