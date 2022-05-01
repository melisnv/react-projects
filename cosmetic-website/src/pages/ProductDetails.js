import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styledComponents from 'styled-components';

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('description');
  const params = useParams();

  const fetchDetailData = async () => {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`
    );
    const detailsData = await response.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    fetchDetailData();
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.name}</h2>
        <img src={details.api_featured_image} alt={details.name} />
      </div>
      <Info>
        <ButtonDiv>
          <Button
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          >
            Description
          </Button>
          <Button
            className={activeTab === 'colors' ? 'active' : ''}
            onClick={() => setActiveTab('colors')}
          >
            Colors
          </Button>
        </ButtonDiv>
        <StyledInformationDiv>
          {activeTab === 'description' && (
            <div>
              <h3>{details.description}</h3>
            </div>
          )}
          {activeTab === 'colors' && (
            <ul>
              {details.product_colors?.map(({ hex_value, colour_name }) => (
                <li key={hex_value}>{colour_name}</li>
              ))}
            </ul>
          )}
        </StyledInformationDiv>
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styledComponents.div`
max-width: 1170px;
display: flex;
align-items: center;
justify-content: center;

img{
    object-fit: cover;
    height: 400px;
    width: 100%;
    display: block;
}

.active{
    background: #102a42;
    color: white;
}

h2 {
    margin-bottom: 3rem;
    text-transform: uppercase;
    font-family: AvantGardeItalicBlod;
    letter-spacing: 1px;
    font-size: 2rem;
}

h3 {
    text-align:center;
    margin-top: 2rem;
    font-family: AvantGardeStd;
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 300;
    min-width: 100%;
}

`;

const ButtonDiv = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
margin: 2rem;
`;

const Button = styledComponents.button`
padding: 1rem 2rem;
color: #102a42;
background: white;
border: 2px solid #102a42;
margin-right: 2rem;
font-weight: 600;
cursor: pointer;
`;

const StyledInformationDiv = styledComponents.div`

li{
    text-decoration: none;
    margin: 0 auto;
}

ul{
    text-decoration: none;
    margin: 2rem;
    text-align: center;
    font-family: AvantGardeStd;
    letter-spacing: 1px;
    font-size: 1rem;
    font-weight: 300;
    list-style: none;
}
`;

const Info = styledComponents.div`
margin: 2rem auto;
min-height: 40vw;
max-width: 30vw;

`;

export default ProductDetails;
