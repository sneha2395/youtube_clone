import  axios from 'axios';

const BASE_URL= 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
   maxResults : '50'
  },

  headers: {
    'X-RapidAPI-Key': "a4f59c42d0msh2fbd4020fb7b650p120b3ejsnb066c599c6d3",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

console.log(process.env.REACT_APP_RAPID_API_KEY)

export const fetchFromApi = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);
   return data ;
}
