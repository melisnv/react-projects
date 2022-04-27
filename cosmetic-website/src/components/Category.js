import styledComponents from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <NavLink to={'/makeup'}>
        <h4>Makeup</h4>
      </NavLink>
      <NavLink to={'/makeup/vegan'}>
        <h4>Vegan</h4>
      </NavLink>
      <NavLink to={'/makeup/new'}>
        <h4>New</h4>
      </NavLink>
      <NavLink to={'/makeup/brands'}>
        <h4>Brands</h4>
      </NavLink>
    </List>
  );
};

const List = styledComponents.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

export default Category;
