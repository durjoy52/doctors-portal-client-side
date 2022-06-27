import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51L4MXVDJT6ZpOGCqfhDlYZSqQNACDzSCpfEHGkoMWxelAO1VzqC4Mi7OjZrTYmA0HddoNGYhqTlSs19h8DHPyZTl00pGrkvyjt');

const Payment = () => {
    const {id} = useParams()
    const {data:appointment,isLoading} = useQuery(['booking',id],()=>
        fetch(`https://floating-fjord-09767.herokuapp.com/booking/${id}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json()))
        if(isLoading){
            return <Loading/>
        }
    return (
       <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="card md:w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p className="text-success">Hello,{appointment.patientName}</p>
  <h2 className="card-title">Please pay for: <span className="text-pink-300">{appointment.treatment}</span></h2>
            <p>We will see you on <span className="text-secondary">{appointment.date}</span></p>
            <p>Please pay: ${appointment.price}</p>
  </div>
</div>
<div className="card w-80 md:w-96 bg-base-100 shadow-xl">
  <div className="card-body">
  <Elements stripe={stripePromise}>
      <CheckoutForm appointment={appointment} />
    </Elements>
  </div>
</div>
  </div>
</div>
    );
};

export default Payment;