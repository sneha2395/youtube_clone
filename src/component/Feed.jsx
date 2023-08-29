import {useState, useEffect} from 'react';
import { Stack, Box, Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

   useEffect(() =>{
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then ((data) => setVideos(data.items))
    
   }, [selectedCategory]);
  return (
     <Stack sx={{flexDirection:{sx:"column", md: "row"}}}>
      <Box sx ={{height:{sx:"auto", md: '92vh'}, borderRight:'1px solid #3d3d3d',px: {sx:0, md:2}}}>
    
      
       <Sidebar
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
       />
      <Typography className='copyright' variant='copy2' sx={{mt:'1.5', color:'#fff'}}>
        CopyRight 2022@
      </Typography>
      </Box>
      <Box p={2} sx={{overflow:'auto', height:'90vh', flex: '2 '}}>
        <Typography variant='h4' fontWeight= "bold" mb={2} sx={{color:'white'}}> {selectedCategory}
          <span style={{color:'#F31503'}}> videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
     </Stack>
  )
}

export default Feed;