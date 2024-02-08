import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:"Peter", age:32, hobby:"Wood Carving"
  })
  const [name,setName] = useState('Peter')
  const [age, setAge] = useState('28');
  const [hobby, setHobby] = useState('Wood Carving');

  const displayPerson=()=>{
    setPerson({ name: 'Sarah', age: 24, hobby: 'Web development' });
    // setPerson({...person, name:"Juliette"});
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Display New Person
      </button>
    </>
  );
};

export default UseStateObject;
