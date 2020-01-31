import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //dollars to cents
  const publishableKey = "pk_test_dqFOxPjiAaU87aaK3xk282yW00Mhsxc8iv";
  const amount = Math.round(price * 71.24) * 100;
  const onToken = async token => {
    try {
      await axios.post("https://crwn-apis.herokuapp.com/payment", {
        amount,
        token
      });
      alert("Payment Successful");
    } catch (error) {
      console.log("payment error", error);
      alert(
        "There was an issue with your payment. Please make sure you use the provided credit card"
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
