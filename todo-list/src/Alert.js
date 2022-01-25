import React, { useState, useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]); // dependency array

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
