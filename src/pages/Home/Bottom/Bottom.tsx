

import {Box,Typography} from '@mui/material';

import styles from  './Bottom.module.css';

const Bottom  = () => {
  return(
    <Box sx={{
      background:theme => theme.palette.secondary.main,
      width:'100%'
    }}>
      <Box className={styles.box}>
        <Box sx={{marginRight:'30px',marginBottom:'30px'}}>
          <Typography variant='h2' sx={{fontSize:{xs:'40px',md:'54px'}}}>The Story</Typography>
          <Typography variant='h5'>In the middle of a dark night, after long years 
          of painstaking work, Dr. Dao found away to create a window into parallel worlds. After 
          that, teaming up with alternative Dao doctors from different universes, they created the Dao Club to explore incredible new open worlds together and make exciting discoveries.
          </Typography>
        </Box>
        <div className={styles.story_img}>
          <img className={styles.img} src='./assets/image/Image.png'></img>
          <img className={styles.more_icon} src='./assets/image/Learn More.png'></img>
        </div>
      </Box>
      
    </Box>
  );
}
export default Bottom;