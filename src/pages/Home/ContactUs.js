import appointment from '../../assets/images/appointment.png';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
const ContactUs = () => {
    return (
        <div className='mb-5 w-full' style={{backgroundImage:`url(${appointment})`,backgroundPosition:'center',padding:'70px 0'}}>
            <div className='text-center mb-7'>
            <h3 className="text-2xl text-secondary font-semibold">Contact us</h3>
            <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
           <div className='flex flex-col items-center gap-5'>
           <input type="text" placeholder="Email Address" class="input w-full max-w-xs md:max-w-md" /> 
           <input type="text" placeholder="Subject" class="input w-full max-w-xs md:max-w-md" /> 
           <textarea class="textarea w-full max-w-xs md:max-w-md h-36 mb-2" placeholder="Your message"></textarea>
           <ButtonPrimary type="submit">Submit</ButtonPrimary>
           </div>
        </div>
    );
};

export default ContactUs;