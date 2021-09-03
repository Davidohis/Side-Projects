import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
 
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'f27c629bf6msh70ca874bc507353p1ae653jsn90b8ef3080b3'
  }
};


const getPlaceData = async () => {
    try {
        const { data: {data} } = await axios.get(URL, options);

        return data;

    } catch (error) {
        console.log(error)  
    }
}

export default getPlaceData;


