import '@testing-library/jest-dom';
import { render, screen, getByTestId } from '@testing-library/react';
import { useEffect } from 'react';

import App from './App';

const FAKEPROPS = [ // TODO: this is copy and pasted and shouldnt be, also this data throws an error since it isnt correct.
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

describe("RecipeList", () => {

  beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(FAKEPROPS)
      })
    );

  });

  it('renders navbar and listing container', () => {
      render(<App />);
      expect(
      getByTestId(document.documentElement, 'navbar'),
    ).toBeInTheDocument()
    expect(
      getByTestId(document.documentElement, 'listing-container'),
    ).toBeInTheDocument()
  });

  // it('test parse listings')

  // it('test get listings')

  // TODO: mock useEffect or break it out

});
