import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {ThemeProvider ,useTheme} from '@mui/material/styles'





import {useState} from 'react';

import {dark,light} from './theme/theme';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';









function App() {
  const [ appMode, setAppMode ] = useState<string>('dark');

  // console.log('mode',appMode);
  return (
    <>
      <ThemeProvider theme={appMode === 'dark' ? dark : light}>
          <BrowserRouter>
            <Header appMode={appMode} setAppMode={setAppMode}/>
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
