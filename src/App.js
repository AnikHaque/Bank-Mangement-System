import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import { Banner } from './components/banner/Banner';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Footer } from './components/footer/Footer';
import {Login} from './components/login/Login';
import SignUp from './components/login/SignUp';
import { MobileBank } from './components/mobilebank/MobileBank';
import { Investor } from './components/investor/Investor';
import AboutUs from './components/aboutus/AboutUs';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';
import { OnlineBanking } from './components/onlinebanking/OnlineBanking';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
   <Routes>
   <Route path="/" element={<Home></Home>} />
   <Route path="/mobilebank" element={<MobileBank></MobileBank>} />
   <Route path="/onlinebank" element={<OnlineBanking></OnlineBanking>} />
   <Route path="/aboutus" element={<AboutUs></AboutUs>} />
   <Route path="/contact" element={<Contact></Contact>} />
   <Route path="/pricing" element={<Pricing></Pricing>} />
   <Route path="/investor" element={<Investor></Investor>} />
   <Route path="/login" element={<Login></Login>} />
   <Route path="/signup" element={<SignUp></SignUp>} />
   <Route path="/about" element={<About></About>} />
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
