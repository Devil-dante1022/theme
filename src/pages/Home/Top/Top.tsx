
import { Typography ,Box ,Button } from "@mui/material";
import {styled ,Theme } from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
const MyButton = styled(Button)(({theme}) => ({
  background: theme.palette.secondary.main,
  color:theme.palette.text.primary,
  margin:'30px 0px'
}));

const useStyles = makeStyles({
  root:{
    width:'80%',
    margin:'auto',
    maxWidth:'1440px',
    '@media screen and (max-width:600px)':{
      padding:'0px',
    }
  }
})
const Top = () => {
  const classes = useStyles();
  return(
    <>
      <Box sx={{
        backgroundImage:'url(./assets/image/bg.png)',
        backgroundSize:'cover',
        backgroundPosition:'center center',
        height:'580px',
        display:'flex',
        alignItems:'center',
        width:'100%'
        }}>  
         <Box className={classes.root}>
           <Typography variant='h2' sx={{fontSize:{xs:'40px',md:'54px'}}}>Decentralized<br/>Autonomous Organization</Typography>
           <Typography variant='h5'>DAO refers to a revolutionary way of managing organizations, able to ensure transparency, immutability, autonomy and security thanks to smart contracts and blockchain technology.</Typography>
          <MyButton>Get Started</MyButton>
         </Box>
      </Box>
    </>
  );
}
export default Top;