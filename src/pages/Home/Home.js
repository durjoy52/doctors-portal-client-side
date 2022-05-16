import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials';
import YourTerms from './YourTerms';

const Home = () => {
    return (
        <div>
          <Banner/>  
          <CardInfo></CardInfo>
          <Services></Services>
          <YourTerms></YourTerms>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <Footer></Footer>
        </div>
    );
};

export default Home;