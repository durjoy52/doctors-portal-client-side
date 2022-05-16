import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '.././../assets/images/doctor-small.png';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:flex justify-center '>
            <img className='mt-[-100px]' src={doctor} alt="" />
        </div> 
        <div className='flex-1  px-5'>
            <div>
            <h2 className='text-xl text-primary font-bold'>Appointment</h2>
            <h3 className='text-3xl text-white py-5'>Make an appointment Today</h3>
            <p className='text-white pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <ButtonPrimary>Get started</ButtonPrimary>
            </div>
        </div>
        </section>
    );
};

export default MakeAppointment;