
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import { CustomerRoute } from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { getUser } from './State/Authentidation/Action';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector((store)=>store);
  useEffect (()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
 
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
