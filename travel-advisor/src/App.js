import React, {useState, useEffect} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import {getPlacesData} from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from  './components/Map/Map';

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coords,  setCoords] = useState({});
    const [bounds, setBounds] = useState(null)

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      });
    }, []);


    useEffect(() => {

      getPlacesData()
            .then((data) => {
              console.log(data)
              setPlaces(data)
          })
      
    }, [coords, bounds]); 


    return (
        <>
          <CssBaseline>
              <Header />
              <Grid container spacing={3} style={{ width: '100%' }}>
                   <Grid item xs={12} md={4}>
                        <List />
                   </Grid>
                   <Grid item xs={12} md={8}>
                        <Map 
                          setCoordinates={setCoords}
                          setBounds={setBounds}
                          coordinates={coords}
                        />
                   </Grid>
              </Grid>
          </CssBaseline>
        </>
    )
    
}

export default App;