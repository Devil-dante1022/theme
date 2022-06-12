import * as React from 'react';
import {
  Box,
  Container,
  Stack,
  Button,
  IconButton
} from '@mui/material';


import {styled, Theme} from '@mui/material/styles';
import {createStyles, makeStyles} from '@mui/styles';
import { useState } from 'react';
import styles from  './Header.module.css';
import WalletConnect from '../WalletConnect/WalletConnect';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';

const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    header:{
      background:theme.palette.primary.main,
      width:'100%',
    },
    body:{
      maxWidth:'1440px',
      margin:'auto',
      width:'90%',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
    },
    menuList:{
      display:'flex',
      width:'55%',
      justifyContent:'space-between',
      '@media screen and (max-width:768px)':{
        display:'none'
      },
      '& a':{
        color:theme.palette.text.primary,
        textDecoration:'none',
        '&:hover':{
          color:theme.palette.text.secondary,
          textDecoration:'underline'
        }
      }
    }
  })
)
const Header = (props:any) => {
  const classes = useStyles()
  const { appMode , setAppMode } = props;
  const handleAppMode = () => {
    appMode === 'dark' ? setAppMode('light') : setAppMode('dark');
  }
  return(
    <>
      <Box className={classes.header}>
        <Box className={classes.body}>
          <img style={{padding:'40px 0px'}} src='./assets/image/logo.png'></img>
          <WalletConnect/>
          <Box className={classes.menuList}>
            <a href=''>Home</a>
            <a href=''>Roadmap</a>
            <a href=''>FAQ</a>
            <a href=''>Team</a>
            <a href=''>Mint</a>
            <a href=''>DAO Games</a>
          </Box>
          
          <Stack direction='row' spacing={1.5}>
            <img src='./assets/image/Instagram.png'></img>
            <img src='./assets/image/Facebook.png'></img>
            <img src='./assets/image/Twitter.png'></img>
          </Stack>
          <IconButton onClick={handleAppMode} sx={{color:'white'}}>
              {
                appMode === 'dark' ? <NightsStayIcon/> : <LightModeIcon/>
              }
            </IconButton>
        </Box>
      </Box>
    </>   
  );
}
export default Header;