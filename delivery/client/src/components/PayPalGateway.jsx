import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalGateway = () => {
  const CLIENT_ID = 'your_paypal_client_id_here';
  const BUTTON_STYLES = {
    layout: 'horizontal',
    color: 'gold',
    shape: 'rect',
    label: 'paypal',
    height: 40,
  };
  
  const handleApprove = (data, actions) => {
    console.log('Transaction completed by ' + data.payer.name.given_name);
    // Call your server to save the transaction details and complete the order
  };
  
  return (
    <PayPalScriptProvider options={{ 'client-id': CLIENT_ID }}>
      <PayPalButtons style={BUTTON_STYLES} onApprove={handleApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalGateway;
