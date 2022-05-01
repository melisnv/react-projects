import Popular from '../components/Popular';
import BrandThisMonth from '../components/BrandThisMonth';
import Search from '../components/Search';
import Category from '../components/Category';
import banner from '../images/sustainable-shampoo-banner.jpg';
import styledComponents from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <StyledBanner>
        <img src={banner} alt="banner" />
      </StyledBanner>
      <Search />
      <Category />
      <Popular />
      <BrandThisMonth />
    </div>
  );
};

const StyledBanner = styledComponents.div`

margin: 0 auto;


img{
  width: 100%;
  margin-bottom: 2rem;
}
`;

export default Home;
