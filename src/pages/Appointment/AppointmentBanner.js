import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bgImg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
const AppointmentBanner = ({date,setDate}) => {

  return (
    <div className="hero min-h-screen" style={{backgroundImage:`url(${bgImg})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
  <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40" >
    <img src={chair} className="md:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt=''/>
    <div>
      <DayPicker
      mode='single'
      selected={date}
      onSelect={setDate}
      />
    </div>
  </div>
</div>
  );
};

export default AppointmentBanner;
