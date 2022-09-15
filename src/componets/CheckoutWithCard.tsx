import { PaperSDKProvider } from '@paperxyz/react-client-sdk/src/Provider';
import { CheckoutWithCard } from '@paperxyz/react-client-sdk/src/components/CheckoutWithCard';
import { PaymentSuccessResult } from '@paperxyz/react-client-sdk/src/interfaces/PaymentSuccessResult';
import { PaperSDKError } from '@paperxyz/react-client-sdk/src/interfaces/PaperSDKError';
import React, { useState, useEffect } from 'react';

const PayWithCardComponent: React.FC = () => {
  const [paperCheckoutId, setPaperCheckoutId] = useState<string>('id123');
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    (async () => {
      // Fetch the Paper checkout ID from your backend
      const checkoutFetch = await fetch('/api/paper/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Potentially some params you want to pass to tell
          // your backend which Paper checkout you want to get.
        }),
      });
      const { checkoutId } = await checkoutFetch.json();
      setPaperCheckoutId(checkoutId);
    })();
  }, []);

  const onPayWithCardTransferSuccess = (result: PaymentSuccessResult) => {
    setMessage(`Transaction succeeded!`);
  };

  const onPayWithCardError = (paperSDKerror: PaperSDKError) => {
    setMessage(
      `Something went wrong! ${paperSDKerror.code}: ${paperSDKerror.error}`
    );
  };

  return (
    <PaperSDKProvider chainName="Polygon">
      <CheckoutWithCard
        sdkClientSecret="123"
        onPaymentSuccess={(result) => {}}
        onReview={(result) => {}}
        onError={(error) => {}}
        options={{
          colorBackground: '#121212',
          colorPrimary: '#19A8D6',
          colorText: '#f0f0f0',
          borderRadius: 30,
        }}
      />
      {message}
    </PaperSDKProvider>
  );
};

export default PayWithCardComponent;
