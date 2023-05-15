import {PayPalButtons} from '@paypal/react-paypal-js';



const PaypalCheckoutButton = (props) => {
    const {products} = props;

  const handleApprove = (orderID) =>{
      // call backend function to fulfil order

      // if respnse is success
      //setPaidfor(true)
  }
  return (
    <PayPalButtons
      style={{
        color: "gold",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill"
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: products.description,
              amount: {
                value: products.price
              }
            }
          ]
        });
      }}
      onApprove={async(data, actions) =>{
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID)
      }}

    />
  )
}

export default PaypalCheckoutButton