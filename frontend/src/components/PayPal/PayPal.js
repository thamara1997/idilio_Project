import React, { useRef, useEffect } from "react";

export default function Paypal({ amount, setPaid }) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Idilio Payments",
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          setPaid(true);
          console.log(true);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, [amount]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
