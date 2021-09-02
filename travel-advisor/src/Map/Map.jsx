import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typograpy, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from  '@material-ui/lab';
import useStyles from './styles';

export default function Mapp() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')
 
    const coordinates = { lat: 41.40338, lng: 2.17403};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
               bootstrapURLKeys={{ key: 'AIzaSyDtD3cb9Dyuk5RnBcJD5RyLZJchFp-g5ME' }}
               defaultCenter={coordinates}
               center={coordinates}
               defaultZoom={14}
               margin={[50, 50, 50, 50]}
               options={''}
               onChange={''}
               onChildClick={''}
            >

            </GoogleMapReact>    
        </div>
    )
}
