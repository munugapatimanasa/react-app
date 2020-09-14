import React from 'react';
import styled from 'styled-components';

const Header =styled.header`
max-width:70rem;
margin:2rem auto;
text-algn:center;
`;

const H1 =styled.h1`
font-family:'Oswald',sans-serif;
margin-bottom:1
`;


function Heading() {
    return (
      <Header>
          <H1>Unsplash Images</H1>
          <p>Trending</p>
          
      </Header>
    )
}
export default Heading;
