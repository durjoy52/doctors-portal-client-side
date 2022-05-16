import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import Banner from './Banner';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials';
import YourTerms from './YourTerms';

const Home = () => {
    return (
        <div className='mx-12'>
          <Banner/>  
          <CardInfo></CardInfo>
          <Services></Services>
          <YourTerms></YourTerms>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;