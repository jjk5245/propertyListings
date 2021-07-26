import '@testing-library/jest-dom';

import { render, screen, getByTestId } from '@testing-library/react';
import PropertyListing from './propertyListing';

const FAKEPROPS = [ // TODO: this is copy and pasted and shouldnt be
    // TODO: property objects should be a class
    {"image": "the.photo", 
      "address": '123 main st, anywhere, U.S.A, 12345',
      "isLiked": false, // TODO: read from local storage whether the property was liked.
      "price": `$1,234,567`,
      "listed": `07/25/21`,
      "info": {"beds": 1, "baths": 1, "squareFoot": 1200}},
    {"image": "the.photo", 
      "address": '123 main st, anywhere, U.S.A, 12345',
      "isLiked": false, // TODO: read from local storage whether the property was liked.
      "price": `$1,234,567`,
      "listed": `07/25/21`,
      "info": {"beds": 1, "baths": 1, "squareFoot": 1200}},
    
];

test('Should render n properties given data', () => {
  render(<PropertyListing properties={FAKEPROPS} />);
  for (let i =0; i < FAKEPROPS.length; i++) {
      expect(
        getByTestId(document.documentElement, `listing-${i}`),
        ).toBeInTheDocument()
  }
});
