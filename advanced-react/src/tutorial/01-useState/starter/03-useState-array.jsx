import { useState } from 'react';
import {data} from '../../../data.js'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleRemove=(id)=>{
    // console.log(id)
    // const newPeople= people.filter((person)=>{ person.id !== id})
    setPeople(
      people.filter((person) => 
        person.id !== id)
    );
  };
  const handleClear = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" className="btn" onClick={()=>handleRemove(id) }>
              Remove
            </button>
          </div>
        );
      })}

      <button
        type="button"
        className="btn"
        onClick={handleClear}
        style={{ marginTop: '2rem' }}
      >
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
