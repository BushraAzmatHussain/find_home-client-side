import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/Authentication/SignIn/SignIn';
import SignUp from './Components/Authentication/SignUp/SignUp';
import About from './Components/About/About';
import Categories from './Components/Categories/Categories';
import FeaturedApertments from './Components/FeaturedApertments/FeaturedApertments';
import Footer from './Components/Footer/Footer';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Video from './Components/Video/Video';
import Contact from './Components/Contact/Contact';
import Header from './Components/Home/Home/Header/Header';
import Rent from './Components/Rent/Rent';
import Sell from './Components/Sell/Sell';
import RequireAuth from './Components/Authentication/SignIn/RequireAuth';
import RentDhaka from './Components/Rent/RentDhaka';
import SellDhaka from './Components/Sell/SellDhaka';
import Home from './Components/Home/Home/Home/Home';
import Detail from './Components/Rent/Detail';
import Review from './Components/Review/Review';

import WriteReview from './Components/Review/WriteReview';
import Dashboard from './Components/Dashboard/Dashboard';
import Featured_01 from './Components/FeaturedApertments/Featured_01';
import Featured_02 from './Components/FeaturedApertments/Featured_02';
import Featured_03 from './Components/FeaturedApertments/Featured_03';

function App() {
  return (
    <div>
      <Header></Header>
      
      
      <Routes>
        <Route path='/*' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/writeReview' element={<WriteReview></WriteReview>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/chooseUs' element={<ChooseUs></ChooseUs>}></Route>
        <Route path='/featured_01' element={<Featured_01></Featured_01>}></Route>
        <Route path='/featured_02' element={<Featured_02></Featured_02>}></Route>
        <Route path='/featured_03' element={<Featured_03></Featured_03>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/video' element={<Video></Video>}></Route>
        
        <Route path='/featuredApertments' element={<FeaturedApertments></FeaturedApertments>}></Route>
        {/* <Route path='/footer' element={<Footer></Footer>}></Route> */}
        <Route path='/about' element={<About></About>}></Route>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
