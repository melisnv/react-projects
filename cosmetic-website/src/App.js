import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import styledComponents from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../src/images/sephora_logo.svg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <img src={logo} alt="sephora logo" />
          </Logo>
        </Nav>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styledComponents(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: AvantGardeBold;
`;

const Nav = styledComponents.div`
background: transparent;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

img{
  width: 100%;
}
`;

export default App;
