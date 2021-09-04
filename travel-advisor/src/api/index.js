import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
 


const getPlaceData = async (sw, ne) => {
    try {
        const { data: {data} } = await axios.get(URL,  {
          params: {
            bl_latitude: sw.lat,  
            tr_latitude:  ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'f27c629bf6msh70ca874bc507353p1ae653jsn90b8ef3080b3'
          }
        });

        return data;

    } catch (error) {
        console.log(error)  
    }
}

export default getPlaceData;


