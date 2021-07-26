import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar/navbar';
import PropertyListing from './components/PropertyListing/propertyListing';
import { encode } from "base-64";
import './styles/global.css';

// This is the main component for the Application, it renders the top navbar and the property listings.
export default  function App() {
  const [properties, setProperties] = useState([]);

/**
 *   Go through each property from the endpoint, and parse it into a form 
 *      that is easier to display on the property list page.
 *   @param {Array<Object>} properties : The properties returned from the endpoint.
 *   @returns {Array<Object>} : parsed information for each property.
 *
 */
  let parseProperties = (properties) => {
    let parsedProperties = [];

    for (const property of properties) {
      let date = new Date(property.listDate);
      let price = "";
      const stringPrice = String(property.listPrice);

      // Parse the list price into a standard price form $1,234,567
      for (let i = 1; i <= Math.floor(stringPrice.length/3); i++){
          price = `${stringPrice.substring(stringPrice.length - i*3, stringPrice.length - (i-1)*3)},${price}`;
      }
      price = `${stringPrice.substring(0, 1)},${price.substring(0, price.length - 1)}`
      // TODO: each property object should be constructed from a class
      parsedProperties.push({"image": property.photos[0], 
      "address": property.address.full, // TODO: this formatting is squirly, and also not sure what to do with unit number? The length of the address probably needs to have a text wrap change
      "isLiked": false, // TODO: read from local storage whether the property was liked.
      "price": `$${price}`,
      "listed": `${date.getMonth()}/${date.getDay()}/${String(date.getFullYear()).substring(2)}`,
      // TODO: half baths are counted, but 3/4 are not. They were all null in the data, is this the way it should be?
      "info": {"beds": property.property.bedrooms, "baths":property.property.bathsFull + property.property.bathsHalf/2, "squareFoot": property.property.area}});
    }
    return parsedProperties;
  }

  // TODO: Every time the page is loaded, the endpoint is hit again, this is not efficient.
  useEffect(() => {
    /** Fetchs properties from a an endpoint, parses them with parseProperties,1 and calls setProperties to update state.
     */
    const getListings = async () => {
      try {
      // Read 9 properties from the endpoint. The API Key is used in the request which should be cleaned up.
      // TODO: This should be pulled into the listing component when routes are added
      const response = await fetch('https://api.simplyrets.com/properties?limit=9', {
        "headers" : {
          'Authorization': `Basic  ${encode('simplyrets:simplyrets')}`, //TODO: dont use the api key and secret in the request
          'Content-Type': 'application/json'
        }
      })

      const posts = await response.json();
      setProperties(parseProperties(posts));
      }
      catch (error) {
        console.log(`Error: ${error}`);
        // TODO: actually handle this
      }
    };
    getListings();
  }, []);

  return (
    <div>
    {/* TODO: Add Router */}
      <NavBar />
      <PropertyListing properties={properties}/>
    </div>
  );
}