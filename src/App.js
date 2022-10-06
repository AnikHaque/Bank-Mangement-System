import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/navbar/Navbar';
import { Banner } from './components/banner/Banner';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/home/Home';



import SignUp from './components/login/SignUp';

import { About } from './components/about/About';

import { Update } from './components/dashboard/update/Update';


import Login from './components/login/Login';

import { Footer } from './components/footer/Footer';
import { Blogs } from './components/blogs/Blogs';
import { BlogPage } from './components/blogpage/Blogpage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar> 
   <Routes>
   <Route path="/" element={<Home></Home>} />
  
   
   <Route path="/about" element={<About></About>} />
   <Route path="/blogs" element={<BlogPage></BlogPage>} />
  
    
    

        <Route path="test" element={<Home></Home>}>
        
          <Route path="list" element={<Update></Update>} />
        
  
        </Route>
   <Route path="/login" element={<Login></Login>} />
   <Route path="/signUp" element={<SignUp></SignUp>} />
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
