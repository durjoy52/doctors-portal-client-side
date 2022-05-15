import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import Banner from './Banner';
import Services from './Services/Services';
import YourTerms from './YourTerms';

const Home = () => {
    return (
        <div className='mx-12'>
          <Banner/>  
          <CardInfo></CardInfo>
          <Services></Services>
          <YourTerms></YourTerms>
        </div>
    );
};

export default Home;