import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles';

export default function List() {
    const  classes = useStyles()
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('');

    const places = [
        {name: "cool plase"},
        {name: "cool david"},
        {name: "cool dev"},
        {name: "cool plase"},
        {name: "cool david"},
        {name: "cool dev"},
        {name: "cool plase"},
        {name: "cool david"},
        {name: "cool dev"},
    ]

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                 <Select value={type} onChange={(e) => setType(e.Target.value)}>
                     <MenuItem value="restaurants">Restaurants</MenuItem>
                     <MenuItem value="hotels">Hotels</MenuItem>
                     <MenuItem value="attractions">Attractions</MenuItem>
                 </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                 <Select value={rating} onChange={(e) => setRating(e.Target.value)}>
                     <MenuItem value={0}>All</MenuItem>
                     <MenuItem value={3}>Aboue 3.0</MenuItem>
                     <MenuItem value={4}>About 4.0</MenuItem>
                     <MenuItem value={4.5}>About 4.5</MenuItem>
                 </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
               {places?.map((place, i) => (
                   <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                   </Grid>    
               ) )}
            </Grid>
        </div>
    )
}