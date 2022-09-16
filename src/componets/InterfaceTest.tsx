import React from 'react';
interface Person {
  name: string;
  work: string;
}

//web3js
//ethers

const InterfaceTest = () => {
  const person: Person = {
    name: 'Kavishka',
    work: 'Surge',
  };

  return (
    <div>
      <div>
        <b>
          <u>Interface Test</u>
        </b>
      </div>
      <small>Name: {person.name}</small>
      <div>
        <small>Comapny: {person.work}</small>
      </div>
    </div>
  );
};

export default InterfaceTest;
