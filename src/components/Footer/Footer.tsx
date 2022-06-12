import {
  Box
} from '@mui/material';
import {styled, Theme} from '@mui/material/styles';
import {createStyles, makeStyles} from '@mui/styles';
import Item from './Item/Item';

const footerData:any[] = [
  {
    img:'./assets/image/1.png',
    title:'DAO governace',
    content:'Each owner has the same rights tothe development decisions of the project'
  },
  {
    img:'./assets/image/2.png',
    title:'Incubator',
    content:'Dr. Dao is an access pass for future collections developed by daolab'
  },
  {
    img:'./assets/image/3.png',
    title:'Redistribution',
    content:'50% of the volume traded in secondary markets it is redistributed weekly to the owners'
  },
  {
    img:'./assets/image/4.png',
    title:'Staking',
    content:'Currently, Ford sells six sedans and coupes in.'
  },
  {
    img:'./assets/image/5.png',
    title:'Dao games P2R and P2e',
    content:'(coming SOON)'
  },
];

const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    footer:{
      display:'flex',
      maxWidth:'1440px',
      margin:'auto',
      justifyContent:'space-between',
      width:'80%',
      padding:'50px 0px',
      flexWrap:'wrap',
      '@media screen and (max-width:412px)':{
        justifyContent:'center'
      }
    }
  })
)
const Footer = () => {
  const classes = useStyles();
  return(
    <>
      <Box sx={{
        background: theme => theme.palette.primary.main,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        width: '100%',
        height: 'auto',
      }}>
          <Box className={classes.footer}>
            {
              footerData.map((info,index) => (
                <Item key={index} img={info.img} title={info.title} content={info.content} />
              ))
            }
          </Box>

      </Box>
    </>
  );
}

export default Footer;