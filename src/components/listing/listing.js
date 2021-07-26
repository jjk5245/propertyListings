import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import heartFill from '../../assets/heart-fill.svg';
import heartStroke from '../../assets/heart-stroke.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 345,
    marginBottom: 30,
  },
  imageContainer: {
    position: 'relative',
    top: 0,
    left: 0,
  },
  houseImage: {
    width: 345,
    height: 225,
  },
  likeImage: {
    position: 'absolute',
    top: '5%',
    left: '85%',
    height: '35px',
    width: '35px',
  },
  info: {
      fontSize: '18px',
  },
  address: {
      color: '#555',
  },
  listed: {
      fontSize: '12px',
      color: '#BBB',
  },
  price: {
    fontWeight: 'bolder',
    fontSize: '20px'
  }
}));

/**
 * TODO: add params
 * Render information about a listing, including the like image, image, price, address, listing date, and number of beds, baths, and square footage.
 */
export default function Listing({isLiked, image, price, info, address, listed, testid}) {
  const classes = useStyles();

  const likeImage = isLiked ? heartFill : heartStroke; 
  return (
    <Card data-testid={testid} className={classes.root}>
      <div className={classes.imageContainer}>
        <img alt="house" className={classes.houseImage}
          src={image}
        />
        <img alt="heart" src={likeImage} className={classes.likeImage} />
      </div>
      <CardContent>
        <Typography className={classes.info} color="textPrimary" component="p">
          {info.beds} BR | {info.baths} Bath | {info.squareFoot} Sq Ft
        </Typography>
        <Typography className={classes.price} color="textPrimary" component="p">
          {price}
        </Typography>
        <Typography className={classes.address} color="textSecondary" component="p">
          {address}
        </Typography>
        <Typography className={classes.listed} color="textSecondary" component="p">
          Listed {listed}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
