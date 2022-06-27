import bgImg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import './Banner.css';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage:`url(${bgImg})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className=" md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <ButtonPrimary>Get started</ButtonPrimary>
    </div>
  </div>
</div>
    );
};

export default Banner;