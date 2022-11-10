import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/Authentication/SignIn/SignIn';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Contact from './Components/Contact/Contact';
import Banner from './Components/Home/Home/Banner/Banner';

import Header from './Components/Home/Home/Header/Header';
import Rent from './Components/Rent/Rent';
import Sell from './Components/Sell/Sell';
import RequireAuth from './Components/Authentication/SignIn/RequireAuth';
import RentDhaka from './Components/Rent/RentDhaka';
import SellDhaka from './Components/Sell/SellDhaka';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/home' element={<Banner></Banner>}></Route>
        {/* <Route path='/about' element={<About></About>}></Route> */}
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/rent' element={
          <RequireAuth>
            <Rent></Rent>
          </RequireAuth>
        }></Route>
        <Route path='/rentDhaka' element={
          <RequireAuth>
            <RentDhaka></RentDhaka>
          </RequireAuth>
        }></Route>
        <Route path='/sellDhaka' element={
          <RequireAuth>
            <SellDhaka></SellDhaka>
          </RequireAuth>
        }></Route>
        <Route path='/sell' element={
        <RequireAuth>
        <Sell></Sell>
      </RequireAuth>
        }></Route>

      </Routes>
    </div>
  );
}

export default App;
