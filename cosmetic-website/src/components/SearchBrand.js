import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styledComponents from 'styled-components';
import banner from '../images/sephora-editors-picks-banner.jpg';

const SearchBrand = () => {
  const [inputBrand, setInputBrand] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/brands/' + inputBrand);
  };

  return (
    <StyledBanner>
      <img src={banner} alt="brand png" />
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <FaSearch />
          <input
            onChange={(e) => setInputBrand(e.target.value)}
            type="text"
            placeholder="Search for brands"
            value={inputBrand}
          />
        </div>
      </StyledForm>
    </StyledBanner>
  );
};

const StyledBanner = styledComponents.div`

margin: 0 auto;


img{
  width: 100%;
  margin-bottom: 2rem;
}
`;

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

export default SearchBrand;
