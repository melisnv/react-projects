import styledComponents from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for brands and products"
          value={input}
        />
      </div>
    </StyledForm>
  );
};

const StyledForm = styledComponents.form`
margin: 0 auto;
width: 50%;


div{
    width: 100%;
    position: relative;
}

input{
    border: none;
    font-size: 1rem;
    color: black;
    font-family: AvantGardeItalicBlod;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    border-radius: 1rem;
    background: #f1f5f8;
    width: 100%;
    margin-left: .5rem;
}

input::placeholder {
    font-family: AvantGardeStd;
    font-size: .8rem;
    letter-spacing: 1px;
}

svg{
    position: absolute;
    top: 50%;
    left: 90%;
    transform: translate(100%, -50%);
    color: black; 
    z-index: 5;
    font-size: .8rem;
}
`;

export default Search;
