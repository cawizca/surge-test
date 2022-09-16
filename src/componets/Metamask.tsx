import React from 'react';
import { PaperSDKProvider } from '@paperxyz/react-client-sdk';
import { CheckoutWithEth } from '@paperxyz/react-client-sdk';
import { PaymentSuccessResult } from '@paperxyz/react-client-sdk';
import { PaperSDKError } from '@paperxyz/react-client-sdk';

const Metamask = () => {
  return (
    <div>
      {' '}
      <PaperSDKProvider appName="Paper Checkout">
        <CheckoutWithEth
          sdkClientSecret="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250cmFjdElkIjoiOTE0ZDZjM2ItMWY2Ny00NWU1LTk2OTQtYzQxNzBiMmM4NjhiIiwicXVhbnRpdHkiOjEsInVzZVBhcGVyS2V5IjpmYWxzZSwibWV0YWRhdGEiOnt9LCJleHBpcmVzSW5NaW51dGVzIjoxNSwiaGlkZU5vbkNhcmRQYXltZW50cyI6ZmFsc2UsIm1pbnRNZXRob2QiOnsibmFtZSI6ImNsYWltVG8iLCJhcmdzIjp7Il90byI6IiRXQUxMRVQiLCJfcXVhbnRpdHkiOiIkUVVBTlRJVFkiLCJfdG9rZW5JZCI6MH0sImNhbGxPcHRpb25zIjp7Imdhc1ByaW9yaXR5IjoibWVkaXVtIn0sInBheW1lbnQiOnsiY3VycmVuY3kiOiJNQVRJQyIsInZhbHVlIjoiMC4wMDAxICAqICRRVUFOVElUWSJ9fSwiZWxpZ2liaWxpdHlNZXRob2QiOnsibmFtZSI6ImdldENsYWltSW5lbGlnaWJpbGl0eVJlYXNvbiIsImFyZ3MiOnsiX3JlY2lwaWVudCI6IiRXQUxMRVQiLCJfcXVhbnRpdHkiOiIkUVVBTlRJVFkiLCJfdG9rZW5JZCI6MH19LCJwcmljaW5nRGV0YWlscyI6eyJjaGFpbk5hbWUiOiJNdW1iYWkiLCJjdXJyZW5jeUFkZHJlc3MiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAiLCJjdXJyZW5jeVN5bWJvbCI6Ik1BVElDIiwicmVhZGFibGVQcmljZSI6IjAuMDAwMSIsInByaWNlSW5XZWkiOnsidHlwZSI6IkJpZ051bWJlciIsImhleCI6IjB4NWFmMzEwN2E0MDAwIn0sImxvY2tlZFByaWNlVXNkQ2VudHMiOjB9LCJ0cmFuc2FjdGlvbklkIjoiMTgzYTA2NmEtNjMzZi00NGRiLTgyMTEtNWNmNTBlM2ZkZDgxIiwiaWF0IjoxNjYzMjQxMTE2LCJleHAiOjE2NjMyNDIwMTYsImlzcyI6InBhcGVyLnh5eiJ9.Q67pmhGlAlOX20fvvR2GFr6587GaUB7Fn4t0yX9Y66o"
          suppressErrorToast={true}
          receivingWalletType={'MetaMask'}
          onSuccess={(result) => {}}
          //onWalletConnected={(userAddress, chainId) => {}}
          onError={(error) => {}}
          // Set to false if you'll handle wallet connection on your app.
          showConnectWalletOptions={true}
          options={{
            colorBackground: '#1B2430',
            colorPrimary: '#7300a8',
            colorText: '#ffffff',
          }}
        />
      </PaperSDKProvider>
    </div>
  );
};

export default Metamask;
