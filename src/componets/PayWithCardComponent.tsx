import { PaperSDKProvider } from '@paperxyz/react-client-sdk';
import { CheckoutWithCard } from '@paperxyz/react-client-sdk';
import { PaymentSuccessResult } from '@paperxyz/react-client-sdk';
import { PaperSDKError } from '@paperxyz/react-client-sdk';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '@paperxyz/react-client-sdk/dist/index.css';

const PayWithCardComponent: React.FC = () => {
  const [paperCheckoutId, setPaperCheckoutId] = useState<string>();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    (async () => {
      // Fetch the Paper checkout ID from your backend
      const checkoutFetch = await fetch('api/paper/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://paper.xyz/',
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
        sdkClientSecret="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdElkIjoiOTE0ZDZjM2ItMWY2Ny00NWU1LTk2OTQtYzQxNzBiMmM4NjhiIiwid2FsbGV0QWRkcmVzcyI6IjB4YzgxODZhMzA0NEQzMTFlZWMxQzFiNTczNDJBYWEyOTBGNmQ5MEFhNSIsImVtYWlsIjoibm8tcmVwbHlAcGFwZXIueHl6IiwicXVhbnRpdHkiOjEsInVzZVBhcGVyS2V5IjpmYWxzZSwibWV0YWRhdGEiOnt9LCJleHBpcmVzSW5NaW51dGVzIjoxNSwiaGlkZU5vbkNhcmRQYXltZW50cyI6ZmFsc2UsIm1pbnRNZXRob2QiOnsibmFtZSI6ImNsYWltVG8iLCJhcmdzIjp7Il90byI6IiRXQUxMRVQiLCJfcXVhbnRpdHkiOiIkUVVBTlRJVFkiLCJfdG9rZW5JZCI6MH0sImNhbGxPcHRpb25zIjp7Imdhc1ByaW9yaXR5IjoibWVkaXVtIn0sInBheW1lbnQiOnsiY3VycmVuY3kiOiJNQVRJQyIsInZhbHVlIjoiMC4wMDAxICAqICRRVUFOVElUWSJ9fSwicHJpY2luZ0RldGFpbHMiOnsiY2hhaW5OYW1lIjoiTXVtYmFpIiwiY3VycmVuY3lBZGRyZXNzIjoiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIiwiY3VycmVuY3lTeW1ib2wiOiJNQVRJQyIsInJlYWRhYmxlUHJpY2UiOiIwLjAwMDEiLCJwcmljZUluV2VpIjp7InR5cGUiOiJCaWdOdW1iZXIiLCJoZXgiOiIweDVhZjMxMDdhNDAwMCJ9LCJsb2NrZWRQcmljZVVzZENlbnRzIjowfSwidHJhbnNhY3Rpb25JZCI6Ijc1NTFmMmZlLTBlYzgtNDk4MS1hNjcwLWYwMDgwY2VjNGMyYyIsImlhdCI6MTY2MzI0MDc3NCwiZXhwIjoxNjYzMjQxNjc0LCJpc3MiOiJwYXBlci54eXoifQ.hI7igzqgOhgYH9HG6zqKgCqizxuLneJqKziG0YeQkrc"
        onPaymentSuccess={(result) => {}}
        onReview={(result) => {}}
        onError={(error) => {}}
        options={{
          colorBackground: '#1B2430',
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
