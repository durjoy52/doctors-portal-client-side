import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError,setCardError] = useState('')
    const [clientSecret,setClientSecret] = useState('')
    const [success,setSuccess] = useState('')
    const [transactionId,setTransactionId] = useState('')
    const [processing,setProcessing] = useState(false)

    const {_id,price,patient,patientName} = appointment
    useEffect(()=>{
        fetch('https://floating-fjord-09767.herokuapp.com/create_payment_intent',
        {
          method: "POST",
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    },[price])
    if(processing){
        return <Loading/>
    }
    const handleSubmit = async(event) =>{
        event.preventDefault()
    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement);
    if(card === null){
        return
    }
    const {error,paymentMethod} =await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
        console.log(error)
        setCardError(error?.message || '')
        setProcessing(true)
    }else{
        setCardError('')
    }
        // confirm card payment 
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email:patient
                },
              },
            },
          );
          if(intentError){
            setCardError(intentError?.message)
            setSuccess('')
            setProcessing(false)
          }else{
            setCardError('')
            setTransactionId(paymentIntent.id)
            setSuccess('your payment is completed')

            const payment = {
                appointment:_id,
                transactionId:paymentIntent.id
            }
            fetch(`https://floating-fjord-09767.herokuapp.com/booking/${_id}`,{
                method:'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                  },
                  body:JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setProcessing(false)
            })
          }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-success btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className="text-red-500">{cardError}</p>
    }
    {
        success && <div>
            <p className="text-green-500">{success}</p>
            <p className="text-cyan-600">your transactionId: <span className="text-orange-500 font-bold">{transactionId}</span></p>
        </div>
    }
        </>
    );
};

export default CheckoutForm;