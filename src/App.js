
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import RestaurantDetail from './component/Restaurant/RestaurantDetail';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline></CssBaseline>
      {/* <Navbar></Navbar> */}
      {/* <Home></Home> */}
      {/* <RestaurantDetail></RestaurantDetail> */}
      {/* <Cart></Cart> */}
      {/* <Profile></Profile> */}
      <CustomerRoute/>
    </ThemeProvider>
  );
}

export default App;
