import React, {useState,useEffect} from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import  Heading from '../Heading';
import  Loader from '../Loader';
import  UnsplashImage from '../UnsplashImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;


const WrapperImage = styled.section`
max-width:70rem;
margin:4rem auto;
display:grid;
grid-gap:1em;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
grid-auto-rows:300px;
 
`;

 
function Home(){
    const [images,setImages]=useState([]);
    useEffect(() =>{
        fetchImages();
    },[])
     const fetchImages =()=>{
        const apiRoot ="https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;
    
        axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
        .then(res => setImages([...images, ...res.data]))
     }
   
    
   
    return(
        <>
        <HeroSection/>
        <Heading/>
        <GlobalStyle/>
        <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader/> }        
        >
        

            <WrapperImage>
            {images.map(image =>(
         <UnsplashImage url={image.urls.thumb} key={image.id}/>

     ))}

            </WrapperImage>
        </InfiniteScroll>
    
    
     </>
);
}
export default Home;