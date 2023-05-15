import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51N0KxuFLoioz5tCneYrL9VAHKIuxW60OpwOiLmkuN6BQq70MKJDpKeNJABAigHllw077jqIIpc4HFQi1T2yLfJHw00Yfuu0lWH');

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error);
      setLoading(false);
    } else {
      const { id } = paymentMethod;
      fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          navigate('/success');
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input type="number" className='w-100 bd-slate-200'/>
        <CardElement />

      </fieldset>
      <input type="number" className='w-100'/>
      <button type="submit" disabled={!stripe || loading} className='bg-red-500 p-2'>
        Pay Now
      </button>
    </form>
  );
};

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
