import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import Card from './Card';
const CardInfo = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <Card cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></Card>
            <Card cardTitle='Our Locations' bgClass='bg-accent' img={marker}></Card>
            <Card cardTitle='Contact Us' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></Card>
        </div>
    );
};

export default CardInfo;