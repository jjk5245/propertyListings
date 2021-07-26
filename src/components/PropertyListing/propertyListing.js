import React from 'react';
import Listing from '../listing/listing';
import './propertyListing.css';

/**
 * TODO add JSDOC
 */
export default function PropertyListing({properties}) {
  // A css grid container to hold each listing
  return (
    <div data-testid="listing-container" className="listing-container">
        {properties.map((property, i) => {    
        return <Listing testid={`listing-${i}`} key={i} address={property.address} listed={property.listed} isLiked={property.isLiked} info={property.info} price={property.price} image={property.image} />
        })}
    </div>
    );
}