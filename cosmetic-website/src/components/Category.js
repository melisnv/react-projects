import styledComponents from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <StyledLink to={'/makeup'}>
        <h4>Makeup</h4>
      </StyledLink>
      <StyledLink to={'/makeup/vegan'}>
        <h4>Vegan</h4>
      </StyledLink>
      <StyledLink to={'/makeup/new'}>
        <h4>New</h4>
      </StyledLink>
      <StyledLink to={'/brands'}>
        <h4>Brands</h4>
      </StyledLink>
    </List>
  );
};

const List = styledComponents.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

const StyledLink = styledComponents(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
text-transform: uppercase;
font-family: AvantGardeStd;
font-size: 1rem;
letter-spacing: 2px;
color: black;
cursor: pointer;
`;

export default Category;
