import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IeAmHFbfmVVXLBe8XSAxuDBfxZph0Btz4HdOjENhnEekq3DaYpBoGkom3KJw3sVJYPELHUgZZFFA3ttVwSlQZkH00ig8KBB39"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
     <SimpleCardForm>  </SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
